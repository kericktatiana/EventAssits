/**
 * dummydata.js - existing file working into routes and serve
 * functions to clean out the db and replace with new data
 * reformatted with my content
 **/

'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
// Thing.find({}).remove(function() {
//   Thing.create({
//     item : 'Plan a show with ease'
//   }, {
//     item : 'Keep an entire crew organized and on the same page'
//   }, {
//     item : 'Maintain organization with minute by minute segment creation'
//   }, {
//     item : 'Keep your head and display and superb show'
//   }, function() {
//       console.log('finished populating things');
//     }
//   );
// });

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
