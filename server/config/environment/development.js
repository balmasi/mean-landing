'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost:27017/tasky-dev'
  },

  s3: {
    bucket: process.env.S3_BUCKET || 'tasky-dev'
  },

  seedDB: false
};
