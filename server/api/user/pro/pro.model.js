var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  extend = require('mongoose-schema-extend'),
  Request = require('../../request/request.model'),
  Review = require('../../review/review.model');

var UserSchema = require('../user.model').schema;

var ProSchema = UserSchema.extend({
  // Note: Other attributes shared with USER model
  name: String,
  image: {
    url: {
      type: String,
      default: 'assets/images/profiles/empty-profile-pro.png'
    },
    thumb: {
      type: String,
      default: 'assets/images/profiles/thumb-empty-profile-pro.png'
    }
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  otherService: String,
  address: {
    street: String,
    apt: String,
    city: String,
    province: String,
    postal: String
  },
  travel: {
    incoming: Boolean,
    outgoing: Boolean,
    online: Boolean,
    distance: Number // If outgoing
  },
  website: String,
  description: String,
  phone: String,

  feedback : {
    average_rating: {
      type: Number,
      default: 0
    },
    reviews: [ Review.schema ]
  },
  geo: {
    type: [ Number ],
    index: '2dsphere'
  },
  incoming_requests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ],
  // Counter for above
  requestCount: {
    type: Number,
    index: true,
    default: 0
  },
  credits: {
    type: Number,
    default: Infinity
  },
  preferences: {
    quote: {
      type: Boolean,
      default : true
    },
    news: {
      type: Boolean,
      default : true
    },
    hired: {
      type: Boolean,
      default : true
    },
    leads: {
      type: Boolean,
      default : true
    }
  }

});


module.exports = mongoose.model('Pro', ProSchema);