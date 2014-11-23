'use strict';

var express = require('express');
var controller = require('./request.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/:category_route/form', controller.getForm);
//router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.hasRole('admin'),  controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;