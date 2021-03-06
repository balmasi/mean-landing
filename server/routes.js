/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/payments', require('./api/payment'));
  app.use('/api/quotes', require('./api/quote'));
  app.use('/api/requests', require('./api/request'));
  app.use('/api/categories', require('./api/category'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/newsletter', require('./api/newsletter'));
  app.use('/api/customers', require('./api/user/customer'));
  app.use('/api/pros', require('./api/user/pro'));
  app.use('/api/mail', require('./api/mail'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

  var routes = app.routes;
  for (var verb in routes){
    if (routes.hasOwnProperty(verb)) {
      routes[verb].forEach(function(route){
        console.log(verb + " : "+route['path']);
      });
    }
  }
};
