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
  /*  Format:
    {
      someCat: 3,
      otherCat: 1
    }
    where the key is a typed category in registration and value is the count
    of times that category was 'requested'
    */
  other_services: {},
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
  ],
  search_keywords: [ String ]
  // TODO: Restrict quote types per category? Fixed,hourly, need more info
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

var CategoryModel= mongoose.model('Category', CategorySchema);

// Ensure text index on fields for search
CategoryModel.collection.ensureIndex({
    name: 'text',
    actor: 'text',
    action: 'text'
  },
  {
    weights: {
      name: 5,
      actor: 5,
      action: 5,
      search_keywords: 3
    },
    default_language: "en",
    name: "CategorySearchIndex"
  }
  ,function (err) {
    if (err) console.error(err);
  }
);

module.exports = CategoryModel;