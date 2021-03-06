'use strict';

var _ = require('lodash');
var key = require('../../config/environment/index').mandrill.apiKey;
var mandrill = require('node-mandrill')(key);
var Category = require('../category/category.model');

// Send email notif when pro receives new request
exports.newRequest = function (requestObj, pros, res) {
  // Isolate only the name and emails
  var mappedPros = _.map(pros, function (pro) {
    if (pro.preferences.leads) {
      return {
        name: pro.firstName + ' ' + pro.lastName,
        email: pro.email
      }
    }
  });

  // Remove pro's form above map who don't want emails aka are undefined
  mappedPros = _.compact(mappedPros);
  if (!mappedPros.length) {
    return res.status(201).send('Created Request');
  }

  Category.findOneAsync({ _id: requestObj.category })
    .then (function (category) {
    return category
  }).error(function(err) {
      return handleError(res, 'Failed while retrieving the category of request for email notifications');
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
            content: pro.lastName
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

// Exposed via /mail/pros/hired
// Sends a "you've been hired notification to pro's mail"
exports.hired = function(req, res) {
  var pro = req.body.pro;
  var request = req.body.request;

  if (!pro.preferences.hired) {
    return;
  }

  var mergeVars =  [{
      rcpt: pro.email,
      vars: [
        {
          name: 'FIRST_NAME',
          content: pro.firstName
        },
        {
          name: 'LAST_NAME',
          content: pro.lastName
        },
        {
          name: 'SERVICE_NAME',
          content: request.category.name
        }
      ]
    }];

  mandrill('/messages/send-template', {
      template_name: 'pro-hired-notification',
      template_content: [],
      message: {
        to: [{
          name: pro.firstName + ' ' + pro.lastName,
          email: pro.email
        }],
        preserve_recipients: true,

        from_email: 'notification.hired@tasky.me',
        subject: "You've just been hired on Tasky!",


        track_opens: true,
        track_clicks: true,

        autotext: true,
        merge: true,
        merge_language: 'handlebars',
        merge_vars: mergeVars,


        tags: [
          'pro',
          'hired',
        ]
      }
    }
    ,function(err, response) {
      if (err) {
        return handleError(res, 'Error while sending notification emails to pro(s)');
      }
      res.status(200).send('Mail Sent');

    });

};

function handleError(res, err) {
  return res.send(500, err);
}