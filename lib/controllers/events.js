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
	newEvent.save(function(err, event) {
		if (err) 
			return res.json(400, err);	
		return res.json(event);
	});
};

/* Get specified event
------------------------*/
exports.showEvent = function (req, res, next) {
	var eventId = req.params.id;

	Event.findById(eventId, function (err, event) {
		if(err) return next(err);
		if(!event) return res.send(404);

		res.send({ shape: event.shape });
		
	});
};

/* Edit the event 
---------------------*/
exports.editEvent = function(req, res, next) {
	var eventId = req.params.id;

	//old data - not to sure if I need this
	var oldTitle = String(req.body.oldTitle);
	var oldDate = String(req.body.oldDate);
	var oldSetUp = String(req.body.oldSetUp);
	var oldStartTime = String(req.body.oldStartTime);
	var oldStrike = String(req.body.oldStrike);
	var oldDescription = String(req.body.oldDescription);

	//new data
	var newTitle = String(req.body.newTitle);
	var newDate = String(req.body.newDate);
	var newSetUp = String(req.body.newSetUp);
	var newStartTime = String(req.body.newStartTime);
	var newStrike = String(req.body.newStrike);
	var newDescription = String(req.body.newDescription);

	Event.findById(eventId, function (err, event) {
		event.title = newTitle;
		event.date = newDate;
		event.setUp = newSetUp;
		event.starttime = newStartTime;
		event.strike = newStrike;
		event.description = newDescription;

		event.save(function(err) {
			if(err) return res.send(400);

			res.send(200);
		});
	});

};

/* Get current event
-----------------------*/
exports.me = function(req, res) {
	res.json(req.event || null);
};