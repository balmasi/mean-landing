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
    enum: ['pending', 'hired' , 'rejected'],
    default: 'pending'
  },
  status_changed_on: Date,
  last_status: {
    type: String,
    enum: ['pending', 'hired' , 'rejected']
  },
  messages:[
    {
      date: {
        type: Date,
        default: Date.now
      },
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
      enum: ['hourly','fixed','contact'],
      default: 'hourly'
    },
    value: Number
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);