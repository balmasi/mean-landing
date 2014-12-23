'use strict';

var mongoose = require('mongoose'),
    Question = require('../question/question.model'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  // Route such as request/:route . maps to this category
  route: String,
  // name such as 'Math Tutoring' , shows up in search
  name: {
    type: String,
    required: true
  },
  // e.g. math tutor
  actor: String,
  // e.g. math tutors
  actor_plural: String,
  // e.g. teach math
  action: String,
  // Null if 'service', Category ID if category BUCKET
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
    index: true
  },
  // Task Credits charged per introduction
  credits_required: {
    type: Number
  },
  travel_types: {
    type: [ String ],
    enum: ['tocustomer', 'topro', 'remote'],
    default: ['tocustomer', 'topro', 'remote']
  },
  // If appointment, gets dropdown, else just when/howlong
  scheduling_type: {
    type: String,
    enum: ['appointment', 'event']
  },
  questions: [
    Question.schema
  ]
  // TODO: Restrict quote types per category? Fixed,hourly, need more info
});

CategorySchema.index({
  name: 'text',
  actor: 'text',
  action: 'text'
},
  { default_language: "en" });

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