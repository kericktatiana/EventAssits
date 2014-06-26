/**
 * api.js - backend controller
 * finds things from the database
**/

'use strict';

var mongoose = require('mongoose'),
    Event = mongoose.model('Event'),

//get the events unique to user
exports.getEvents = function(req, res) {
	
  var userId = req.user.id;

  //figure out how to get the user's specific events

  return Event.find(function (err, events) {
    if (!err) {
      return res.json(events);
    } else {
      return res.send(err);
    }
  });
}; //getEvents



