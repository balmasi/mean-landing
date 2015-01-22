'use strict';

var _ = require('lodash');
var key = require('../../config/environment/index').mandrill.apiKey;
var Promise = require('bluebird');
var Category = require('../category/category.model');
var User = require('../user/user.model');

var mandrill =require('node-mandrill')('7g377aWuJAx4NdoAkC8iQw');

// Sends an email to EMAIL_TO for use in contact us section
exports.newQuote = function (requestObj, quote, pro, res) {
  var requestingUser;
  User.findOneAsync({ _id: requestObj.requested_by })
    .then(
    function (user) {
      requestingUser = user;
      return Category.findOneAsync({ _id: requestObj.category })
    })
    .error(
    function(err) {
      return handleError(res, 'Failed while retreiving the category of request for [New Quote] email notifications');
    })
    .then (
    function (service) {
      var mergeVars = [{
        rcpt: requestingUser.email,
        vars: [
          {
            name: 'FIRST_NAME',
            content: requestingUser.firstName
          },
          {
            name: 'SERVICE_NAME',
            content: service.name
          },
          {
            name: 'LAST_NAME',
            content: requestingUser.lastName
          },
          {
            name: 'PRO_NAME',
            content: pro.name
          }
        ]
      }];

      console.log('\n\nMergeVars :', mergeVars);
        mandrill('/messages/send-template', {
          template_name: 'customer-new-quote-notification',
          template_content: [],
          message: {
            to: [{
              name: requestingUser.firstName + ' ' + requestingUser.lastName,
              email: requestingUser.email
            }],
            preserve_recipients: false,

            from_email: 'notification.newquote@tasky.me',
            subject: 'New quote received for ' + service.name + '!',


            track_opens: true,
            track_clicks: true,

            autotext: true,
            merge: true,
            merge_language: 'handlebars',
            merge_vars: mergeVars,


            tags: [
              'customer',
              'new-quote',
                'category-' + service.name,
                'location-' + requestObj.location.subLocality
            ]
          }
        }, function (err, response) {
          if (err) { throw new Error('could not send notification email for new quote to customer' ) }
          console.log('notification email for new quote sent successfully', response);
        });
    });
};


function handleError(res, err) {
  return res.send(500, err);
}