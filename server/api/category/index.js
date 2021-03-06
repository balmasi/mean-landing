'use strict';

var express = require('express');
var controller = require('./category.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/search/:searchTerm', controller.search);
router.get('/getAllServices', controller.getAllServices);
router.get('/route/:category', controller.showByRoute);
router.get('/root', controller.root);
router.get('/:id/sub', controller.subcategories);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/addToOtherServices', controller.addToOtherServices);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;