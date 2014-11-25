'use strict';

var Pro = require('./pro.model');
var config = require('../../../config/environment');
var jwt = require('jsonwebtoken');

var controller = require('../user.controller');


/**
 * Get list of pros
 * restriction: 'admin'
 */
controller.index = function(req, res) {
  Pro.find({
    _accountType: 'Pro'
  }, '-salt -hashedPassword', function (err, pros) {
    if(err) return res.send(500, err);
    res.json(200, pros);
  });
};

/**
 * Creates a new pro
 */
controller.create = function (req, res, next) {
  var newPro = new Pro(req.body);
  newPro.provider = 'local';
  newPro.role = 'user';
  newPro.save(function(err, pro) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: pro._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};


/**
 * Authentication callback
 */
controller.authCallback = function(req, res, next) {
  res.redirect('/');
};

module.exports = exports = controller;