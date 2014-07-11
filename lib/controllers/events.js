/**
 * events.js - backend controller
 * functionality for events
**/

'use strict';

var mongoose = require('mongoose'),
	Event = mongoose.model('Event'),
	Segment = mongoose.model('Segment');

/* Create Event
--------------------*/
exports.createEvent = function (req, res, next) {
	var newEvent = new Event(req.body);
	newEvent.provider = 'local';
	newEvent.save(function(err) {
		if (err) return res.json(400, err);		
	});
};

/* Get specified event
------------------------*/
exports.showEvent = function (req, res, next) {
	var eventId = req.params.id;

	console.log(req.params.id);

	Event.findById(eventId, function (err, event) {
		if(err) return next(err);
		if(!event) return res.send(404);

		res.send({ shape: event.shape });
		
	});
};

/* Edit the event 
---------------------*/


/* Add a Segment
---------------------*/
exports.addSegment = function (req, res, next) {
	var newSegment = new Segment(req.body);
	newSegment.provider = 'local';
	newSegment.save(function(err) {
		if (err) return res.json(400, err);		
	});
};


/* Get current event
-----------------------*/
exports.me = function(req, res) {
	res.json(req.event || null);
};