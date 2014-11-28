'use strict';

var mongoose = require('mongoose'),
    Question = require('../question/question.model'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  route: String,
  name: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    default: null,
    index: true
  },
  credits: {
    type: Number
  },
  actor: String,
  action: String,
  questions: [
    Question.schema
  ]


});


// ---- Methods ----

// @ returns Promise
CategorySchema.methods.subcategories = function(optionalId) {
  return this.model('Category').find({
    parent: this.id
  }).exec();
};

// --- Statics ------

// @ returns Promise
CategorySchema.statics.getRootCategories = function() {
  return this.model('Category').find({
    parent: null
  }).exec();
};

// @ returns Promise
CategorySchema.statics.getSubcategoriesOf = function(id) {
  return this.model('Category').find({
    parent: id
  }, { name: 1 }).exec();
};

module.exports = mongoose.model('Category', CategorySchema);