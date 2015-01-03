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
      email: 'admin@admin.com',
      password: 'admin'
    }
    , function(){
      console.log('ADMINS created');
    })
});



/* Insert some categories */
Category.remove({}).exec()
  .then(function(){
    return Category.create(
      {
        name: 'Moving',
        parent: null
      }
    );
  }).then(function(movingParent){
    console.log('creating subcategory');
    return Category.create(
      {
        name: 'Local Moving',
        route: 'local-moving',
        search_keywords: ['local','short', 'distance', 'within','city','building', 'furniture'],
        parent: movingParent.id,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Mover',
        actor_plural: 'Movers',
        action: 'help you move',
        questions: [
          {
            field_type: 'text',
            question: 'Is there anything else the mover should know?'
          },
          {
            field_type: 'checklist',
            question: 'What do you want to move?',
            choices: [
              {
                label: 'Just a few things',
                value: 'Just a few things'
              },
              {
                label: 'Studio or 1-bedroom apartment',
                value: 'Studio or 1-bedroom apartment'
              },
              {
                label: '2-3 bedroom apartment',
                value: '2-3 bedroom apartment'
              },
              {
                can_describe: true
              }
            ]
          },
          {
            field_type: 'select',
            question: 'How far will you be moving?',
            choices: [
              {
                label: 'Within the same building',
                value: 'Within the same building'
              },
              {
                label: 'Under 25km',
                value: 'Under 25km'
              }
            ]
          }
        ]
      },
      {
        name: 'Long Distance Moving',
        route: 'long-distance-moving',
        travel_types: ['topro'],
        parent: movingParent.id,
        search_keywords: ['long', 'distance', 'out', 'between', 'cities','move', 'office'],
        credits: 2,
        actor: 'Mover',
        actor_plural: 'Movers',
        action: 'help you move',
        scheduling_type: 'event',
      }).then(
      function(local, long){
        console.log ('finished populating categories');
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
              email: 'pro@pro.com',
              credits: Infinity,
              password: 'pro',
              phone: '416-222-2144',
              website: 'http://www.tasky.com',
              services: [ local._id, long._id ]
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
              email: 'pro2@pro.com',
              credits: 3,
              password: 'pro',
              phone: '416-222-2144',
              website: 'http://www.tasky.com',
              services: [ local._id, long._id ]
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
            email: 'test@test.com',
            password: 'test'
          });
        });
      },
      function(err) {
        console.error (err);
      }
    );

  });