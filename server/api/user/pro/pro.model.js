var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  extend = require('mongoose-schema-extend'),
  Request = require('../../request/request.model');

var UserSchema = require('../user.model').schema;

var ProSchema = UserSchema.extend({
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
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Request'
    }
  ],
  requestCount: {
    type: Number,
    index: true,
    default: 0
  }

});


module.exports = mongoose.model('Pro', ProSchema);