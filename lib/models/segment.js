/**
 * segment.js - Mongoose Model, Database
 * Schema for segments
 * 
 * eventId: Segments are specific to events
 * time: the given time for a segment to start
 * duration: the estimated time for a segment to last
 * category: the category being called
 * task: related to category, the specific task
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Segment Schema
-----------------------*/
var SegmentSchema = new Schema({
	eventId: String,
	time: String,
	duration: String,
	category: String,
	task: String
});



/* Virtuals
--------------------*/
SegmentSchema
	.virtual('segmentInfo')
	.get(function() {
		return {
			'id': this._id 
			'time': this.time,
			'duration': this.duration,
			'category': this.category,
			'task': this.task
		};
	});

.SegmentSchema
	.virtual('shape')
	.get(function() {
		return {
			'id': this._id 
			'time': this.time,
			'duration': this.duration,
			'category': this.category,
			'task': this.task
		};
	});

/* Validations
-----------------------*/
SegmentSchema.path('eventId').required(true);
SegmentSchema.path('time').required(true);
SegmentSchema.path('duration').required(true);
SegmentSchema.path('category').required(true);
SegmentSchema.path('task').required(true);



/* Pre-save hook
--------------------------*/
SegmentSchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Segment', SegmentSchema);



