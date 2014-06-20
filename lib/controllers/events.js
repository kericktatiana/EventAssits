'use strict';

var mongoose = require('mongoose'),
	Event = mongoose.model('Event');

/* Create Event
--------------------*/
exports.createEvent = function (req, res, next) {
	var newEvent = new Event(req.body);
	newEvent.provider = 'local';
	newEvent.save(function(err) {
		if (err) return res.json(400, err);

		req.evented(newEvent, function(err) {
			if (err) return next(err);

			return res.json(req.event.eventInfo);
		});
		
	});
};

/* Get 'profile' of specified event
------------------------------------*/
// exports.showEvent = function (req, res, next) {
// 	var eventId = req.params.id;

// 	Evnt.findById(eventId, function (err, event) {
// 		if (err) return next(err);

// 		if(!event) return.send(404);

// 		res.send({ eventProfile: event.eventProfile });
// 	});
// };

/* Edit the event 
---------------------*/



/* Get current event
-----------------------*/
exports.me = function(req, res) {
	res.json(req.event || null);
};