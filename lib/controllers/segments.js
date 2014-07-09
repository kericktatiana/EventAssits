/**
 * segments.js - backend controller 
 * functionality for segments
**/

'use strict';

var mongoose = require('mongoose'),
	Segment = mongoose.model('Segment');


/* Add Segment
------------------------*/
exports.addSegment = function (req, res, next) {
	var newSegment = new Segment(req.body);
	newSegment.provider = 'local';
	newSegment.save(function(err) {
		if (err) return res.json(400, err);
	});
};