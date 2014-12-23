'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  field_type: {
    type: String,
    enum: ['text', 'date', 'select', 'checklist', 'radio'],
    required: true,
    default: 'text'
  },
  question: String,
  choices: {  // Optional
    type: [ {
      label: { type: String },
      value: { type: String} ,
      can_describe: {type:Boolean}, // If true render text field on choice
      answer: {
        type: Schema.Types.Mixed
      }
    }]
  }
});


module.exports = {
  schema: QuestionSchema,
  model: mongoose.model('Question', QuestionSchema)
}


