'use strict';

var express = require('express');
var controller = require('./pro.controller');
var auth = require('../../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.delete('/:id', controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/me/quotes', auth.isAuthenticated(), controller.myQuotes);
router.get('/:id',controller.show);
router.post('/', controller.create);

module.exports = router;
