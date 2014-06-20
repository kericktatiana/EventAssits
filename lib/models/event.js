'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Event Schema
------------------*/
var EventSchema = new Schema({
	title: String,
	userId: Number,
	date: Date,
	setUp: String,
	startTime: String,
	strike: String,
	description: String
});

// Event indo to id the current event in app
EventSchema
	.virtual('eventInfo')
	.get(function() {
		return {
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