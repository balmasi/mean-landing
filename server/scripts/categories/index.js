'use strict';

var _ = require('lodash');
var Category = require('../../api/category/category.model');

// Search given search term
var categories = [
  require('./Cleaning'),
  require('./Moving')
];

console.log('Registering Categories\n');

Category.remove({}, function(err) {
  for (var i = 0; i < categories.length; i++) {
    var createCategory = categories[i];
    Category.createAsync(createCategory.root)
      .then( function(root) {
        var category = _.find(categories, function(cat) {
          return cat.root.name == root.name;
        });

        console.log('*', category.root.name);
        return _.map(category.children, function(child) {
          return child(root._id);
        });
      })
      .error(function(er) {
        console.error('Failed to create Root Category', category.root.name);
      })
      .then( function(children) {
        var childrenNames = _.map(children, 'name');
        console.log(childrenNames);
        Category.createAsync(children)
      })
      .error(function(er) {
        console.error('Failed to create children categories due to ', er);
      })
  }
});