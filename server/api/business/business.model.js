'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  address: String,
  phone: String,
  website: String,
  joined: Date,
  lastLogin: Date,
  verification: {
    address: Boolean,
    phone: Boolean
  }
});

/**
 * Virtuals
 */

// Public profile information
BusinessSchema
  .virtual('profile')
  .get(function() {
    return {
      'name': this.name,
      'email': this.email,
      'phone': this.phone,
      'address': this.address
    };
  });

/**
 * Validations
 */

BusinessSchema
  .path('email')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({email: value}, function(err, business) {
      if(err) throw err;
      if(business) {
        if(self.id === business.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
  }, 'The specified email address is already in use.');

var validatePresenceOf = function(value) {
  return value && value.length;
};


module.exports = mongoose.model('Business', BusinessSchema);
