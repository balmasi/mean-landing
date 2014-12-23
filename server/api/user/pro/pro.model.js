var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  extend = require('mongoose-schema-extend'),
  Request = require('../../request/request.model');

var UserSchema = require('../user.model').schema;

var ProSchema = UserSchema.extend({
  // Note: Other attributes shared with USER model
  name: String,
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
  geo: {
    type: [ Number ],
    index: '2dsphere'
  },
  // Incoming requests come here (TODO: change name to incoming_requests)
  requests: [
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
  // Number of task credits, default free until first customer hires
  credits: {
    type: Number,
    default: Infinity
  }

});


module.exports = mongoose.model('Pro', ProSchema);