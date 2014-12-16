'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuoteSchema = new Schema({
  request: {
    type: Schema.Types.ObjectId,
    ref: 'Request'
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'Pro'
  },
  status: {
    type: String,
    enum: ['pending', 'accepted' , 'rejected'],
    default: 'pending'
  },
  messages:[
    {
      from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      message: String
    }
  ],
  rate: {
    method: {
      type: String,
      enum: ['hourly','flat','contact'],
      default: 'hourly'
    },
    value: Number
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);