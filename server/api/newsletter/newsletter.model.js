'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewsletterSchema = new Schema({
    email: String,
    fname: String,
    lname: String,
    service: String,
    isBusiness: Boolean
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);