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

// Sends an email to EMAIL_TO for use in contact us section
exports.contact = function (req, res, next) {
  var v = require('validator'), errors = [];
  var
    from = req.body.from,
    subject = req.body.subject,
    message = req.body.message;


  if (!v.isEmail(from)) {
    errors.push('"From" email address must be valid.');
  }
  if (v.isNull(message)) {
    errors.push("Message cannot be blank");
  }

  if (errors !== []) {
    return handleError(res, errors);
  }

  var EMAIL_TO = 'borna+tasky@borna-almasi.com';
  var myMsg = new Email(
    { from: from || 'unprovided@sample.net'
      , to:   EMAIL_TO
      , subject: subject || 'Email from Landing Page'
      , body: message || 'Empty Body'
    });

  myMsg.send(function (err){
    if (err !== null) {
      return handleError(res, err);
    }
    return res.json(201, myMsg);
  });

};


function handleError(res, err) {
  var error = {
    type: "error",
    text: "There was a problem subscribing. Make sure your email is valid."
  };

  if (err.code == -100) {
    error.text = err.message;
  }
  return res.send(500, error);
}