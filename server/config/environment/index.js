'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: process.env.TASKY_SECRET || 'taskyismysecret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  google: {
    clientID:     process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  },

  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    newsletterListId: '8d3f84ea4c'
  },

  s3: {
    accessKey: process.env.S3_ACCESSKEY,
    secret: process.env.S3_SECRET
  },

  mandrill: {
    apiKey: process.env.MANDRILL_API_KEY
  },

  zoho: {
    support: {
      token: process.env.ZOHO_SUPPORT_TOKEN,
      portal: 'tasky',
      department: 'tasky-support'
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
    require('./' + process.env.NODE_ENV + '.js') || {});