'use strict';

var mongoose = require('mongoose'),
	Event = mongoose.model('Event');


/**
 * Create Event
 */
exports.create = function (req, res, next) {
	var newEvent = new Event(req.body);
	newEvent.provider = 'local';
	newUser.save(function(err) {
		if (err) return res.json(400, err);
	});
};