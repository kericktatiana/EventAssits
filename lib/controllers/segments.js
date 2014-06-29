/**
 * segments.js - backend controller
 * functionality for segments
**/

'use strict';

var mongoose = require('mongoose'),
	Segment = mongoose.model('Segement');


/* Create Segment
-----------------------*/
exports.createSegment = function (req, res, next) {
	var newSegment = new Segment(req.body);
	newSegment.provider = 'local';
	newSegment.save(function(err) {
		if (err) return res.json(400, err);
	});
};