'use strict';

var express = require('express');
var homeCtrl = require('./home.controller.js');

var router = express.Router();

// Home page emails
router.post('/contact', homeCtrl.contact);


module.exports = router;