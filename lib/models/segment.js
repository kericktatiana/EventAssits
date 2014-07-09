/** 
 * segment.js - Mongoose Model, Database
 * Schema for segments
 *
 * segments are unique to event
 *
 * eventId - specific to the currentEvent
 * time - time for segment to happen
 * duration - length of time for segment to happen
 * category - the category of the segment
 * task - the category spefic task of the segment
 * 
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Category Schema
--------------------*/
var SegmentSchema = new Schema({
	eventId: String,
	time: String,
	duration: String, 
	category: String, 
	task: String
});

/* Validations
-----------------*/


/* Pre-save hook
-------------------*/
SegmentSchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Segment', SegmentSchema);


