'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Event Schema
------------------*/
var EventSchema = new Schema({
	title: String,
	userId: Number,
	date: Date,
	setUp: Date,
	startTime: Date,
	strike: Date,
	description: String
});


/* VALIDATIONS
-------------------*/
EventSchema.path('title').required(true);
EventSchema.path('date').required(true);
EventSchema.path('setUp').required(true);
EventSchema.path('startTime').required(true);
EventSchema.path('strike').required(true);


module.exports = mongoose.model('Event', EventSchema);