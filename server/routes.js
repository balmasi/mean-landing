/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors'),
  sm = require('sitemap');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/newsletter', require('./api/newsletter'));

  app.use('/auth', require('./auth'));

//   Sitemap logic
  var sitemap = sm.createSitemap ({
    hostname: 'http://tasky.me',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
      { url: '/',  changefreq: 'monthly', priority: 1.0 }
    ]
  });

  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send( xml );
    });
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
