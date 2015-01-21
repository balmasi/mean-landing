'use strict';

var _ = require('lodash');
var key = require('../../config/environment/index').mandrill.apiKey;
var mandrill = require('node-mandrill')(key);

// Sends an email to EMAIL_TO for use in contact us section
exports.contact = function (req, res, next) {
  var v = require('validator'), errors = [];
  var
    from = req.body.from,
    subject = req.body.subject,
    message = req.body.message;


  if (!v.isEmail(from)) {
    errors.push('"From" email address must be valid.');
  }
  if (v.isNull(message)) {
    errors.push("Message cannot be blank");
  }

  if (errors.length) {
    return handleError(res, errors);
  }

  mandrill('/messages/send', {
    message: {
      to: [{
        email: 'info@tasky.me'
      }],
      from_email: from || 'unprovided@sample.net',
      subject: subject || 'Contact Us from Landing Page',
      text: message || 'Empty Body'
    }
  }, function(err, response)
  {
    //uh oh, there was an error
    if (err) return handleError(res, err);

    //everything's good, lets see what mandrill said
    else {
      console.log(response);
      return res.json(201, response);
    }
  });

};


function handleError(res, err) {
  return res.send(500, err);
}