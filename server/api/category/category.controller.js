'use strict';

var _ = require('lodash');
var Category = require('./category.model');

// Search given search term
exports.search = function(req, res) {
  Category
    .find(
    { $text : { $search : req.params.searchTerm },
      parent: { $type: 7 } // ObjectId type only
    },
    { score : { $meta: "textScore" } }
  )
    .sort({ score : { $meta : 'textScore' } })
    .limit(10)
    .select('name route')
    .exec(function(err, results) {
      if (err) handleError(res, err);
      return res.json(200, results);
    });
};

// Get list of categorys
exports.index = function(req, res) {
  Category.find(function (err, categorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, categorys);
  });
};

exports.getAllServices = function(req, res) {
  Category.getAllServices()
    .then(function(services) {
      return res.status(200).send(services);
    },
    function(err) {
      return handleError(res, err);
    }
  )
};

exports.root = function( req, res ) {
  Category.getRootCategories()
    .then(function (cats) {
      return res.json(200, cats);
    },
    function(err) {
      return handleError(res, err);
    });
};

exports.subcategories = function( req, res ) {
  var parentId = req.params.id;
  if (typeof parentId === 'undefined') {
    return handleError(res, 'No parent ID provided for subcategory query.');
  }
  Category.getSubcategoriesOf(parentId)
    .then(
    function(subCats){
      res.json(subCats);
    },
    function(err) {
      return handleError(res, err);
    }
  );
};

exports.showByRoute = function (req, res) {
  var category = req.params.category;
  if (typeof category === 'undefined') return handleError(res, 'Category route not defined in form fetch');

  Category.findOneAsync({
    route: category
  })
    .then(function(cat) {
      res.status(200).json(cat);
    })
    .catch (function(err) {
    return handleError(res, err);
  });
};

// Get a single category
exports.show = function(req, res) {
  Category.findById(req.params.id, function (err, category) {
    if(err) { return handleError(res, err); }
    if(!category) { return res.send(404); }
    return res.json(category);
  });
};

// Creates a new category in the DB.
exports.create = function(req, res) {
  Category.create(req.body, function(err, category) {
    if(err) { return handleError(res, err); }
    return res.json(201, category);
  });
};

exports.addToOtherServices = function (req, res) {
  var catId = req.params.id;
  var newService = req.body.other;
  Category.findOneAsync({ _id: catId}).then(function(cat) {
    if (!cat) return res.status(404).send('Could not find requested category');

    if (!cat.other_services) cat.other_services = {};

    var serviceHash = cat.other_services[newService];
    if (serviceHash) {
      cat.other_services[newService] += 1;
    }
    else {
      cat.other_services[newService] = 1;
    }

    // Due to Mixed Type we have to mark modified
    cat.markModified('other_services');
    cat.save(function(err){
      if (err) return handleError(res, err);
      res.status(201).send('Successfully updated "Other" service for category: ' + cat.name);
    });

  });
};

// Updates an existing category in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Category.findById(req.params.id, function (err, category) {
    if (err) { return handleError(res, err); }
    if(!category) { return res.send(404); }
    var updated = _.merge(category, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, category);
    });
  });
};

// Deletes a category from the DB.
exports.destroy = function(req, res) {
  Category.findById(req.params.id, function (err, category) {
    if(err) { return handleError(res, err); }
    if(!category) { return res.send(404); }
    category.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}