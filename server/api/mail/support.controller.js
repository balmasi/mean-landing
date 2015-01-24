'use strict';

var _ = require('lodash');
var supportConfig = require('../../config/environment/index').zoho.support;
var request = require('request');

var authToken = supportConfig.token,
  department = supportConfig.department,
  portal = supportConfig.portal;

exports.createTicket = function (req, res, next) {
  request.post('https://support.zoho.com/api/xml/requests/addrecords',
    {
      form :{
        authtoken: authToken,
        portal: portal,
        department: department,
        xml: req.body.xmldata
      }
    }
    , function(err,httpResponse,body){
      if (err) return handleError(res, err);
      require('xml2js').parseString(body, function(err, result) {
        if (result.response.error) {
          return handleError(res, result.response.error);
        }
        res.status(201).send(result.response);
      });
    });
};


function handleError(res, err) {
  return res.send(500, err);
}