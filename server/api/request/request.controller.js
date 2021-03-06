'use strict';

var _ = require('lodash');
var Request = require('./request.model');
var Category = require('../category/category.model');
var Pro = require('../user/pro/pro.model');
var User = require('../user/user.model');
var Quote = require('../quote/quote.model');
var notification = require('../mail/pro-mail.controller');

// Get list of requests
exports.index = function(req, res) {
  Request.find(function (err, requests) {
    if(err) { return handleError(res, err); }
    return res.json(200, requests);
  });
};

// Get a single request
exports.show = function(req, res) {
  Request.findById(req.params.id)
    .populate(
    {
      path: 'category quotes'
    })
    .exec()
    .then(
    function(request) {
      return Quote.populateAsync(request, {
        path: 'quotes.from',
        model: User,
        select: '-hashedPassword -salt'
      });
    })
    .then(
    function(modReq) {
      return res.json(modReq);
    },
    function(err) {
      return handleError(res, err);
    });
};


// Requested by me
exports.myRequests = function (req, res) {
  var user = req.user;
  if (!user) return res.json(401);
  Request.find({
    requested_by: user._id
  })
    .populate(
    {
      path: 'category quotes'
    })
    .sort({ date_created: -1})
    .exec()
    .then(
    function(request) {
      return Quote.populateAsync(request, {
        path: 'quotes.from',
        model: User,
        select: '-hashedPassword -salt'
      });
    })
    .then(
    function(modReq) {
      return res.json(modReq);
    },
    function(err) {
      return handleError(res, err);
    });

};

// Creates a new request in the DB.
exports.create = function(req, res) {

  Request.createAsync(req.body)
    .then(function(requestObj) {
      // Find the BOTTOM 20 pros in this category
      // and add the request to their requests list
      Pro.find({
        services: requestObj.category
      })
        .sort('requestCount')
        .limit(20)
        .exec().then(function(pros) {
          pros.forEach( function (pro){
            pro.requestCount++;
            pro.incoming_requests.addToSet(requestObj);
            pro.save(function(err, pro) {
              if (err) handleError(res, 'Could not route new request to pro(s)');
            });
          });

          // Send notification Email to Pro's we sent to
          return notification.newRequest(requestObj, pros, res);
        });
    })
    .catch( function(err) {
      return handleError(res, err);
    })
};

// Updates an existing request in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Request.findById(req.params.id, function (err, request) {
    if (err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    var updated = _.extend(request, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, request);
    });
  });
};

// Deletes a request from the DB.
exports.destroy = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    request.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}