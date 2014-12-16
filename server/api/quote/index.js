'use strict';

var express = require('express');
var controller = require('./quote.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/request/:requestId/pro/:proId', controller.getByRequestAndPro);
router.get('/:id', controller.show);
router.post('/:id/messages', controller.addMessage);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;