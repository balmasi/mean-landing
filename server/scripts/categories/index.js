'use strict';

var _ = require('lodash');
var Category = require('../../api/category/category.model');

// Search given search term
var categories = [
  require('./Appliance'),
  require('./Cleaning'),
  require('./Craftsperson'),
  require('./Electrical'),
  require('./Furnace & heating system'),
  require('./Garage door'),
  require('./Handyman'),
  require('./Interior Design'),
  require('./Moving'),
  require('./Painting'),
  require('./Plumbing'),
  require('./Roofing')
];

console.log('* Registering Categories\n');
Category.remove({}, function(err) {
  for (var i = 0; i < categories.length; i++) {
    var createCategory = categories[i];
    Category.createAsync(createCategory.root)
      .then( function(root) {
        console.log('Creating Category ' + root.name );
        var category = _.find(categories, function(cat) {
          return cat.root.name == root.name;
        });

        return _.map(category.children, function(child) {
          return child(root._id);
        });
      })
      .error(function(er) {
        console.error('Failed to create Root Category', er);
      })
      .then( function(children) {
        var childrenNames = _.map(children, 'name');
        Category.createAsync(children)
      })
      .error(function(er) {
        console.error('Failed to create children categories due to ', er);
      })
  }
});