/**
 * event.js - Mongoose Model, Database
 * Schema for events
 *
 * Title: What the event is called
 * userId: The events are unique to the currentUser
 * date: Day event is supposed to happen
 * setUp: When intial set up is to begin
 * startTime: When the show is to start
 * strike: the estimated time to start break down and clean up
 * description: Description of the event, the key points
**/

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Event Schema
------------------*/
var EventSchema = new Schema({
	title: String,
	userId: String,
	date: Date,
	setUp: String,
	startTime: String,
	strike: String,
	description: String
});


/* Virtuals
-------------------*/
// Basic info to id the current event
EventSchema
	.virtual('eventInfo')
	.get(function() {
		return {
			'id': this._id,
			'title': this.title,
			'date': this.date,
			'setUp': this.setUp,
			'startTime': this.startTime,
			'strike': this.strike,
			'description': this.description
		};
	});

//Event shape information (similar to user profile)
EventSchema
	.virtual('shape')
	.get(function() {
		return {
			'id': this._id,
			'title': this.title,
			'date': this.date,
			'setUp': this.setUp,
			'startTime': this.startTime,
			'strike': this.strike,
			'description': this.description
		};
	});


/* VALIDATIONS
-------------------*/
EventSchema.path('title').required(true);
EventSchema.path('date').required(true);
EventSchema.path('setUp').required(true);
EventSchema.path('startTime').required(true);
EventSchema.path('strike').required(true);

/* Pre-save hook
---------------------*/
EventSchema
	.pre('save', function(next) {
		if (!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Event', EventSchema);


