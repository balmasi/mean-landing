'use strict';

var express = require('express');
var controller = require('./user.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.post('/', controller.create);

router.get('/me', auth.isAuthenticated(), controller.me);
router.post('/me/image', auth.isAuthenticated(), controller.uploadProfilePic);

router.get('/:id', auth.isAuthenticated(), controller.show);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
