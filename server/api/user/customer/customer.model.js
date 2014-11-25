var mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend');

var UserSchema = require('../user.model').schema;

var CustomerSchema = UserSchema.extend({
  isCustomer: {
    type: Boolean,
    default: true
  }
});


module.exports = mongoose.model('Customer', CustomerSchema);