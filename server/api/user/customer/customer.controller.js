'use strict';

var Customer = require('./customer.model');
var config = require('../../../' +
  'config/environment');
var jwt = require('jsonwebtoken');

var controller = require('../user.controller');


/**
 * Get list of customers
 * restriction: 'admin'
 */
controller.index = function(req, res) {
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
controller.create = function (req, res, next) {
  var newCustomer = new Customer(req.body);
  newCustomer.customervider = 'local';
  newCustomer.role = 'user';
  newCustomer.save(function(err, customer) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: customer._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};


/**
 * Authentication callback
 */
controller.authCallback = function(req, res, next) {
  res.redirect('/');
};

module.exports = exports =  controller;
