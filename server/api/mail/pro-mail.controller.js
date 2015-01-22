'use strict';

var _ = require('lodash');
var key = require('../../config/environment/index').mandrill.apiKey;
var mandrill = require('node-mandrill')(key);
var Category = require('../category/category.model');

// Sends an email to EMAIL_TO for use in contact us section
exports.newRequest = function (requestObj, pros, res) {
  // Isolate only the name and emails
  var mappedPros = _.map(pros, function (pro) {
    return {
      name: pro.firstName + ' ' + pro.lastName,
      email: pro.email
    }
  });

  Category.findOneAsync({ _id: requestObj.category })
    .then (function (category) {
    return category
  }).error(function(err) {
      return handleError(res, 'Failed while retreiving the category of request for email notifications');
    })
    .then (function (service) {
    var mergeVars = _.map(pros, function (pro) {
      return {
        rcpt: pro.email,
        vars: [
          {
            name: 'FIRST_NAME',
            content: pro.firstName
          },
          {
            name: 'SERVICE_NAME',
            content: service.name
          },
          {
            name: 'LAST_NAME',
            content: pro.firstName
          },
          {
            name: 'LOCATION',
            content: requestObj.location.subLocality
          }
        ]
      };
    });

    mandrill('/messages/send-template', {
        template_name: 'pro-notification-new-request',
        template_content: [],
        message: {
          to: mappedPros,
          preserve_recipients: false,

          from_email: 'notification.newrequest@tasky.me',
          subject: 'A potential customer is awaiting your response!',


          track_opens: true,
          track_clicks: true,

          autotext: true,
          merge: true,
          merge_language: 'handlebars',
          merge_vars: mergeVars,


          tags: [
            'pro',
            'new-request',
            'category-'+ service.route ,
            'location-' + requestObj.location.subLocality ,
            'subject-potential-customer'
          ]
        }
      }
      ,function(err, response) {
        if (err) {
          return handleError(res, 'Error while sending notification emails to pro(s)');
        }
        res.status(201).json(requestObj);

      });
  });


};


function handleError(res, err) {
  return res.send(500, err);
}