'use strict';

var _ = require('lodash');
var Quote = require('./quote.model');
var Request = require('../request/request.model');
var sock = require('./quote.socket');
var Pro = require('../user/pro/pro.model');
var custNotifier = require('../mail/customer-mail.controller');


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
  // BLOG: Promise chain value management

  var credits_required = req.body.credits_required;
  var proId = req.body.from;
  var newCredits;

  // Deduct Amount from pro's credits
  var proPromise = Pro.findByIdAsync(proId).then(function (pro) {
    var proCredits = pro.credits;
    if (proCredits < credits_required) {
      return handleError(res, new Error("Not Enough Credits to Quote"));
    }
    newCredits = pro.credits -= credits_required;
    return pro;
  }).error(function() { return handleError(res, 'Could not deduct credits from Pro when creating quote'); });


  var quotePromise = proPromise.then(function() { return Quote.createAsync(req.body); });

  quotePromise.then( function() {
    return Request.findOneAsync({ _id: quotePromise.value().request })
  }).then(function (request) {
    request.quotes.addToSet(quotePromise.value()._id);
    return request.saveAsync()
  })
    .spread(function (request, numAffected) {
      try {
        custNotifier.newQuote(request, quotePromise.value(), proPromise.value(), res);
      }
      catch (e) {
        return handleError(res, e);
      }

      return res.status(201).json({
        quote: quotePromise.value(),
        request: request,
        credits: newCredits
      });
    })
    .error(function(err) { /* Catch-all Error handler for quote and request */
      return handleError(res, err);
    })
    .catch(function(err) {
      return handleError(res, err);
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