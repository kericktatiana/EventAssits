'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');
    Event = mongoose.model('Event');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
}; //awesomeThings export


/** 
 * Get events
 */
exports.events = function(req, res) {
	return Event.find(function (err, events) {
		if (!err) {
			return res.json(events);
		} else {
			return res.send(err);
		}
	});
};//events export