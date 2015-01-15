/**
 * Setting up html snapshots for crawlers
 */

'use strict';

var sm = require('sitemap');
var Browser = require('zombie');
var fs = require('fs');
var url = require('url');
var config = require('../config/environment');



module.exports = function(app) {

  app.use( function (req, res, next ) {
    var frag = req.query._escaped_fragment_;
    var filename;

    if (typeof frag === 'undefined') {
      return next();
    }

    var _url = url.parse(req.url);
    var pathname = _url.pathname;

    if (pathname === "" || pathname === "/")
      filename = "/index.html";
    else
      filename =  pathname + '.html';

    // Serve the static html snapshot
    var file = __dirname + "/snapshots" + filename;
    fs.exists(file, function (exists) {
      if (!exists) {
        var hostname = req.protocol + '://' + req.host + ':'  + config.port;

        var browser = new Browser({
          loadCSS: false,
          waitFor: 5000
        });

        browser.visit( hostname  + pathname )
          .then(function() {
            var html = browser.html();
            fs.open(file, 'w', function(e, fd) {
              if (e) return;
              fs.write(fd, html);
            });
            res.send(html);
        });
      }
      else {
        res.sendfile(file);
      }
    });

  });


//   Sitemap logic
  var sitemap = sm.createSitemap ({
    hostname: 'http://tasky.me',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
      { url: '/',  changefreq: 'daily', priority: 1.0 }
    ]
  });

  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send( xml );
    });
  });
};
