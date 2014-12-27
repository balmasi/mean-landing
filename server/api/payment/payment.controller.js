'use strict';

var _ = require('lodash');
var Payment = require('./payment.model');
var Pro = require('../user/pro/pro.model');
var Stripe = require("stripe")("sk_test_w3RbaOeAl4zAahK7xofY0VMp");

var AMOUNTS = {
  small: 1000,
  medium: 3500,
  large: 8000
};

var CREDITS ={
  small: 5,
  medium: 15,
  large: 30
};
// Creates a new payment via Stripe
exports.create = function(req, res) {
  var pack = req.body.pack,
    description = req.body.description,
    token = req.body.token,
    currency = 'cad',
    proId = req.body.proId;

  var charge = Stripe.charges.create({
      amount: AMOUNTS[pack.name],
      description: description,
      card: token,
      currency: currency
    },
    function(err, charge) {
      if (err) {
        return handleError(res, err);
      }

      Pro.findByIdAndUpdateAsync( proId, {
        $inc: {
          credits: CREDITS[pack.name]
        }
      })
        .then(function(pro){
          return res.status('200').json({ credits: pro.credits });
        },function(err){
          return handleError(res, err);
        })
  });
};

function handleError(res, err) {
  return res.send(500, err);
}