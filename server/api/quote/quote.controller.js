'use strict';

var _ = require('lodash');
var Quote = require('./quote.model');
var Request = require('../request/request.model');
var sock = require('./quote.socket');
var Pro = require('../user/pro/pro.model');

// Get list of quotes
exports.index = function(req, res) {
  Quote.find(function (err, quotes) {
    if(err) { return handleError(res, err); }
    return res.json(200, quotes);
  });
};

// Get a single quote
exports.show = function(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    if(err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    return res.json(quote);
  });
};

// Gets the quote object based on the pro and request ID's
exports.getByRequestAndPro = function(req, res) {
  var proId = req.params.proId;
  var reqId = req.params.requestId;
  Quote.findOne({
      from: proId,
      request: reqId
    },
    function(err, quote) {
      if(err) { return handleError(res, err); }
      if(!quote) { return res.send(404); }
      return res.json(quote);
    });
};

// Creates a new quote in the DB.
exports.create = function(req, res) {
  var credits_required = req.body.credits_required;
  var proId = req.body.from;
  var proCredits;
  Pro.findByIdAsync(proId).then(function(pro){
    proCredits = pro.credits
    if (proCredits < credits_required) {
      return handleError(res, new Error("Not Enough Credits to Quote"));
    }
    pro.credits -= credits_required;
    pro.saveAsync().catch(function(err) {
      return handleError(res, new Error(err));
    });
    return proCredits - credits_required;
  })
  .then(function(newCredits){
    Quote.create(req.body, function(err, quote) {
      if(err) { return handleError(res, err); }
      Request.update(
        { _id: quote.request },
        { $addToSet: { quotes: quote._id }}
        , function(err, request) {
          if (err) return handleError(res, err);
          if (!request) return res.send(404, "Request for this quote could not be found");
          return res.json(201, { quote: quote, request: request, credits: newCredits });
        });
    });
  });
};

// Updates an existing quote in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Quote.findById(req.params.id, function (err, quote) {
    if (err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    var updated = _.extend(quote, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, quote);
    });
  });
};

exports.addMessage = function(req, res) {
  var qId = req.params.id;
  var message = req.body
  Quote.findByIdAsync(qId)
    .then(function(quote) {
      quote.messages.push(message);
      quote.save();
      return res.status(201).json(message);
    })
    .catch(function(err) {
      return handleError(res, err);
    });
};

// Deletes a quote from the DB.
exports.destroy = function(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    if(err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    quote.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}