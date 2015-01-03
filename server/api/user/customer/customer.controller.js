'use strict';

var Customer = require('./customer.model');
var _ = require('lodash');
var config = require('../../../' +
  'config/environment');
var jwt = require('jsonwebtoken');

var userCtrl = require('../user.controller');


var validationError = function(res, err) {
  return res.json(422, err);
};


/**
 * Get list of customers
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  Customer.find({
    _accountType: 'Customer'
  }, '-salt -hashedPassword', function (err, customers) {
    if(err) return res.send(500, err);
    res.json(200, customers);
  });
};

/**
 * Creates a new customer
 */
exports.create = function (req, res, next) {
  var newCustomer = new Customer(req.body);
  newCustomer.customervider = 'local';
  newCustomer.role = 'user';
  newCustomer.save(function(err, customer) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: customer._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token, accountType: 'Customer' });
  });
};

exports.show = function(req,res,next) {
  userCtrl.show(req,res,next);
}

exports.me = function(req,res,next) {
  userCtrl.me(req,res,next);
};

exports.destroy = function(req,res,next) {
  userCtrl.destroy(req,res,next);
};

exports.changePassword = function(req,res,next) {
  userCtrl.changePassword;
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};

module.exports = exports
