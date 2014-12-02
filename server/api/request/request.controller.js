'use strict';

var _ = require('lodash');
var Request = require('./request.model');
var Category = require('../category/category.model');
var passport = require('passport');

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
      path: 'category',
      select: 'name actor'
    })
    .exec()
    .then(
    function(request) {
      return res.json(request)
    },
    function(err) {
      return handleError(res, err);
    });
};

exports.myRequests = function (req, res) {
  var user = req.user;
  if (!user) return res.json(401);
  Request.find({
    requested_by: user._id
  })
    .populate({
      path: 'category',
      select: 'name actor'
    })
    .exec()
    .then( function(requests) {
      return res.json(requests)
    },
    function(err) {
      return handleError(res, err);
    });

};

exports.getForm = function( req, res ) {
  var category = req.params.category_route;
  if (typeof category === 'undefined') handleError(res, 'Category route not defined in form fetch');
  Category.findOne({
    route: category
  }, { questions: 1 })
    .exec()
    .then(
    function(result){
      res.json(result);
    },
    function(err) {
      handleError(res, err);
    }
  );

};

// Creates a new request in the DB.
exports.create = function(req, res) {
  Request.createAsync(req.body)
    .then(function(requestObj) {
      return res.json(201, requestObj);
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
    var updated = _.merge(request, req.body);
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