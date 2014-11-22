'use strict';

var mongoose = require('mongoose'),
//    extend = require('mongoose-schema-extend'),
  Question = require('../question/question.model'),
//    Quote = require('../quote/quote.model'),
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
  questions: [ Question.schema ],
  status: {
    type: String,
    enum: ['active', 'inactive', 'fulfilled'],
    default: 'active'
  }
//  quotes: [ Quote ]
});


module.exports = mongoose.model('Request', RequestSchema);
