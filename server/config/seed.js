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
        name: 'Intracity Moving',
        route: 'local-moving',
        parent: movingParent.id,
        travel_types: ['tocustomer', 'topro', 'remote'],
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
        name: 'Intracity Moving (more than 100km)',
        route: 'long-distance-moving',
        parent: movingParent.id,
        credits: 2
      }).then(
      function(subcat){
        console.log ('finished populating categories');
        Pro.find({}).remove(function(){
          Pro.create({
            role: 'user',
            firstName: 'Hasan',
            lastName: 'Speedy',
            provider: 'local',
            name: 'Speedy Glass',
            email: 'pro@pro.com',
            password: 'pro',
            phone: '416-222-2144',
            website: 'http://www.tasky.com',
            services: [ subcat._id ]
          }, function(err, professional) {
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