'use strict';

var Business = require('./business.model');
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of Businesses
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  Business.find({}, function (err, businesses) {
    if(err) return res.send(500, err);
    res.json(200, businesses);
  });
};

/**
 * Creates a new busienss
 */
exports.create = function (req, res, next) {
  var newBusiness = new Business(req.body);
  newBusiness.save(function(err, business) {
    if (err) return validationError(res, err);
    res.json(200, business);
  });
};

/**
 * Get a single business
 */
exports.show = function (req, res, next) {
  var businessId = req.params.id;

  Business.findById(businessId, function (err, business) {
    if (err) return next(err);
    if (!business) return res.send(401);
    res.json(business.profile);
  });
};

/**
 * Deletes a business
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  Business.findByIdAndRemove(req.params.id, function(err, business) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};


/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
