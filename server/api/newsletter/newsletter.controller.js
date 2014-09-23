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
    var isBusiness = req.body.business === 'true';
    api.call('lists','subscribe', {
      id: mcConfig.newsletterListId,
      email: {
        email:req.body.email
      },
      merge_vars: {
        'ATYPE': isBusiness ? 'business' : 'customer'
      }
    }, function(error, data) {
      if (error) {
        return handleError(res, error);
      }
    });
    return res.json(201, nl);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}