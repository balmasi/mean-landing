'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  reviewer_name: String,
  from:  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: Number,
  comment: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema);