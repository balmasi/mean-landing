'use strict';

var mongoose = require('mongoose'),
//    extend = require('mongoose-schema-extend'),
  Question = require('../question/question.model'),
  Quote = require('../quote/quote.model'),
  Schema = mongoose.Schema;

var RequestSchema = new Schema({
  category:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
    index: true
  },
  requested_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  questions: [ {
    question: String,
    answer: Schema.Types.Mixed
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'fulfilled'],
    default: 'active'
  },
  quotes: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Quote'
      }
    ],
    default: []
  },
  schedule_type: {
    type: String,
    enum: ['flexible', 'asap', 'date', 'other'],
    required: true
  },
  schedule_details: {
    date: Date,
    time: String,
    duration: String,
    description: String
  },
  travel: {
    to_pro: Boolean,
    to_customer: Boolean,
    remote: Boolean,
    distance: Number
  },
  location: {
    subLocality: String,
    lngLat:
      {
        type: [ Number ] ,
        index: '2dsphere'
      }
  },
  date_created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Request', RequestSchema);
