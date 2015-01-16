'use strict';

var Pro = require('./pro.model');
var Customer = require('../customer/customer.model');
var Quotes = require('../../quote/quote.model');
var Category = require('../../category/category.model');
var Review = require('../../review/review.model');
var config = require('../../../config/environment');
var jwt = require('jsonwebtoken');
var errors = require('../../../components/errors');

var userCtrl = require('../user.controller');


var validationError = function(res, err) {
  return res.json(422, err);
};


/**
 * Get list of pros
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  Pro.find({
    _accountType: 'Pro'
  }, '-salt -hashedPassword', function (err, pros) {
    if(err) return res.send(500, err);
    res.json(200, pros);
  });
};

/**
 * Get a single pro
 */
exports.show = function (req, res, next) {
  var proId = req.params.id;

  Pro.findById(proId, '-salt -hashedPassword')
    // TODO: embed service name instead of populating
    .populate('incoming_requests services')
    .exec()
    .then(function (pro) {
      if (!pro) return errors[404](req,res);
      res.status(200).json(pro);
    },
    function(err) {
      return next(err);
    });
};

/**
 * Get a single pro
 */
exports.me = function (req, res, next) {
  var proId = req.user._id;

  Pro.findById(proId, '-salt -hashedPassword')
    .populate('incoming_requests').exec()
    .then(
      function(pro) {
    return Category.populateAsync(pro, {
      path: 'incoming_requests.category',
      model: Category,
      select: 'credits_required name scheduling_type'
    });
  })
    .then(function(pro) {
      return Customer.populateAsync(pro, {
        path: 'incoming_requests.requested_by',
        model: Customer,
        select: '-hashedPassword -facebook -google -_accountType'
      });
    })
    .then(function (pro) {
      return res.status(200).json(pro);
    },
    function(err) {
      return next(err);
    });
};

// Returns quotes sent by pro
exports.myQuotes = function (req, res, next) {
  var proId = req.user._id;

  Quotes.findAsync({
    from: proId
  }).then(function(quotes) {
    return res.status(200).json(quotes);
  }).error(function(error) {
    return next(error);
  });
};

/**
 * Creates a new pro
 */
exports.create = function (req, res, next) {
  var newPro = new Pro(req.body);
  newPro.provider = 'local';
  newPro.role = 'user';
  newPro.save(function(err, pro) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: pro._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token, accountType: 'Pro' });
  });
};


exports.newReview = function(req, res, next) {
  var id = req.params.id;

  Pro.findByIdAsync(id).then(function(pro) {
    var numReviews = pro.feedback.reviews.length,
      newReview = new Review(req.body);

    pro.feedback.reviews.push(newReview);
    pro.feedback.average_rating = ((pro.feedback.average_rating * numReviews) +  newReview.rating ) / (numReviews + 1);
    pro.save(function (err, professional) {
      if (err) return res.status(500).send(err);
      return res.status(201).json({
        review: newReview,
        rating: professional.feedback.average_rating
      });
    });
  })
    .catch (function(err) {
      return next(err);
  });
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

module.exports = exports;