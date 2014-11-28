var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  extend = require('mongoose-schema-extend');

var UserSchema = require('../user.model').schema;

var ProSchema = UserSchema.extend({
  name: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  services: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
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
  }
});


module.exports = mongoose.model('Pro', ProSchema);