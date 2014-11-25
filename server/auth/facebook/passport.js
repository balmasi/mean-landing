var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// IMPORTANT!
// This creates an account of type CUSTOMER
exports.setup = function (Customer, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      Customer.findOne({
        'facebook.id': profile.id
      },
      function(err, customer) {
        if (err) {
          return done(err);
        }
        if (!customer) {
          customer = new Customer({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          customer.save(function(err) {
            if (err) done(err);
            return done(err, customer);
          });
        } else {
          return done(err, customer);
        }
      })
    }
  ));
};