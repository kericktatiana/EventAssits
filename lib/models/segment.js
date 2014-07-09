/**
 * segment.js - Mongoose Model, Database
 * Schema for segments
 *
 * Time: the time the segments happens
 * Duration: the length of time for segment
 * Category: the category of the segment
 * Task: what needs to be done during the segment
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Segment Schema
-----------------------*/
var SegmentSchema = new Schema({
	time: String,
	duration: String,
	category: String,
	task: String
});

/* Virtuals
-----------------------*/
SegmentSchema
	.virtual('segmentInfo')
	.get(function() {
		return {
			'time': this.time,
			'duration': this.duration,
			'category': this.category,
			'task': this.task
		};
	})


/* VALIDATIONS
-------------------*/
SegmentSchema.path('time').required(true);
SegmentSchema.path('duration').required(true);
SegmentSchema.path('category').required(true);


/* Pre-save hook
---------------------*/
SegmentSchema
	.pre('save', function(next) {
		if (!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Segment', SegmentSchema);
