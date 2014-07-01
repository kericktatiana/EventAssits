'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    item : 'Fancy information about Event Assit'
  }, {
    item : 'Something benefitial to using this'
  }, {
    item : 'Gonna get organized'
  }, {
    item : 'Stay on top of your events and tasks'
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });
