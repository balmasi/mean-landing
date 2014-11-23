'use strict';

var _ = require('lodash');
var Request = require('./request.model');
var Category = require('../category/category.model');

// Get list of requests
exports.index = function(req, res) {
  Request.find(function (err, requests) {
    if(err) { return handleError(res, err); }
    return res.json(200, requests);
  });
};

// Get a single request
exports.show = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    return res.json(request);
  });
};

exports.getForm = function( req, res ) {
  var category = req.params.category_route;
  if (typeof category === 'undefined') handleError(res, 'Category route not defined in form fetch');
  Category.findOne({
    route: category
  }, { questions: 1 })
    .exec()
    .then(
    function(result){
      res.json(result);
    },
    function(err) {
      handleError(res, err);
    }
  );

};

// Creates a new request in the DB.
exports.create = function(req, res) {
  Request.create(req.body, function(err, request) {
    if(err) { return handleError(res, err); }
    return res.json(201, request);
  });
};

// Updates an existing request in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Request.findById(req.params.id, function (err, request) {
    if (err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    var updated = _.merge(request, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, request);
    });
  });
};

// Deletes a request from the DB.
exports.destroy = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    request.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}