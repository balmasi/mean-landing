var mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend');

var UserSchema = require('../user.model').schema;

var CustomerSchema = UserSchema.extend({
  image: {
    url: {
      type: String,
      default: 'assets/images/profiles/empty-profile-customer.png'
    },
    thumb: {
      type: String,
      default: 'assets/images/profiles/thumb-empty-profile-customer.png'
    }
  },
  preferences: {
    quote: {
      type: Boolean,
      default : true
    },
    news: {
      type: Boolean,
      default : true
    }
  }
});


module.exports = mongoose.model('Customer', CustomerSchema);