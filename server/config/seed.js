/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Category = require('../api/category/category.model');
var User = require('../api/user/user.model');
var Customer = require('../api/user/customer/customer.model');
var Pro = require('../api/user/pro/pro.model');
var Request = require('../api/request/request.model')


User.find({}).remove(function(){
  User.create({
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'tasky-admin@mailinator.com',
      password: 'taskyadmin'
    }
    , function(){
      console.log('ADMINS created');
    })
});



Pro.find({}).remove(function(){
  Pro.create({
      role: 'user',
      firstName: 'Hasan',
      lastName: 'Speedy',
      provider: 'local',
      name: 'Move4Life Ltd.',
      address: {
        street: '23 Village Squire Ln.',
        city: 'Thornhill',
        province: 'ON',
        postal: 'L3T 1Z8'
      },
      email: 'tasky-pro@mailinator.com',
      credits: Infinity,
      password: 'taskypro',
      phone: '416-222-2144',
      website: 'http://www.tasky.com'
    },
    {
      role: 'user',
      firstName: 'Pro2',
      lastName: 'Mover',
      provider: 'local',
      address: {
        street: '4 Kenneth Ave',
        city: 'North York',
        province: 'ON',
        postal: 'M2N 6M7'
      },
      name: 'Toronto Moving Inc.',
      email: 'tasky-pro2@mailinator.com',
      credits: 3,
      password: 'taskypro',
      phone: '416-222-2144',
      website: 'http://www.tasky.com'
    }
    , function(err, professional) {
      if (err) console.error(err);
      console.log('PROS Populated');
    });
});

Customer.find({}).remove(function() {
  Customer.create({
    role: 'user',
    provider: 'local',
    name: 'Test User',
    email: 'tasky-test@mailinator.com',
    password: 'taskytest'
  });
});

