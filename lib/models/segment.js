/**
 * segment.js - Mongoose Model, Database
 * Schema for segments
 *
 * eventId: Segements are unique to each event, required the event of the id to be called
 * time: Proposed time for segement
 * duration: time limit of the segments 
 * category: Segments are created for the category they're built upon - many categories for each time
 * categoryTask: What is supposed to happen with that category being called, one category per entry of time task is to each category
 * people: The humans assigned to the task
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Segment Schema
-------------------*/
var SegementSchema = new Schema({
	eventId: String,
	time: Date,
	duration: Date,
	category: String, 
	task: String,
});

/* VALIDATIONS
------------------*/
SegementSchema.path('eventId').required(true);
SegementSchema.path('time').required(true);
SegementSchema.path('duration').required(true);
SegementSchema.path('category').required(true);
SegementSchema.path('task').required(true);


/* Pre-save hook
------------------*/
SegementSchema
	.pre('save', function(next) {
		if (!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Segment', SegementSchema);


