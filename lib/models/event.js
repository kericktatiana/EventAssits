'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Event Schema
------------------*/
var EventSchema = new Schema({
	title: String,
	user_id: Number,
	date: Date,
	set_up: Date,
	start_time: Date,
	strike: Date,
	description: String
});


/* VALIDATIONS
-------------------*/
EventSchema.path('title').required(true);
EventSchema.path('date').required(true);
EventSchema.path('set_up').required(true);
EventSchema.path('start_time').required(true);
EventSchema.path('strike').required(true);

mongoose.model('Event', EventSchema);