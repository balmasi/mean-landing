/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var config = require('../../config/environment');

// Contact us form
var Email = require('email').Email;

// Mailchimp Stuff
var Newsletter = require('./newsletter.model.js');
var MCapi = require('mailchimp').MailChimpAPI;
var mcConfig = config.mailchimp
var apiKey = mcConfig.apiKey;
try {
    var api = new MCapi(apiKey, { version : '2.0' });
} catch (error) {
    console.log(error.message);
}


// Creates a new subscriber in the DB and mailchimp list.
exports.create = function(req, res) {

  Newsletter.create(req.body, function(err, nl) {
    if(err) {
        return handleError(res, err);
    }
    // No errors
    var isBusiness = req.body.accountType === 'business';
    var merge = {
      'ATYPE': req.body.accountType,
      'SERVICE': isBusiness? req.body.service || 'unknown' : 'N/A'
    };

    if (req.body.fname && req.body.lname) {
      merge = _.merge({
        'FNAME': req.body.fname,
        'LNAME': req.body.lname
      },
      merge);
    }

    api.call('lists','subscribe', {
      id: mcConfig.newsletterListId,
      email: {
        email:req.body.email
      },
      merge_vars: merge
    }, function(error, data) {
      if (error) {
        return handleError(res, error);
      }
      else {
        return res.json(201, {type: "Success", text: "Email successfully added to mailing list."});
      }
    });
  });
};



function handleError(res, err) {
  var error = {
    type: "error",
    text: "There was a problem subscribing. Make sure your email is valid."
  };

  if (err.code === -100) {
    error.text = err.message;
  }
  return res.send(500, error);
}