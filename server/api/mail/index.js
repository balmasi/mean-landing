'use strict';

var express = require('express');
var homeCtrl = require('./home-mail.controller.js');
var proCtrl = require('./pro-mail.controller.js');
var supportCtrl = require('./support.controller.js');

var router = express.Router();

// Home page emails
router.post('/contact', homeCtrl.contact);

// Pro
router.post('/pros/hire', proCtrl.hired);

// Support
router.post('/support', supportCtrl.createTicket);

module.exports = router;