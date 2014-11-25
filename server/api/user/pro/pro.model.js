var mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend');

var UserSchema = require('../user.model').schema;

var ProSchema = UserSchema.extend({
  name: String,
  address: String,
  geo: {
    type: [ Number ],
    index: '2dsphere'
  },
  phone: String,
  website: String
});


module.exports = mongoose.model('Pro', ProSchema);