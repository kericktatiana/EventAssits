'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/*
 * Event Schema 
 */
var EventSchema = new Schema ({
	user_id: Number, 
	title: String,
	date: Date,
	set_up: Date, 
	start_time: Date,
	end_time: Date,
	description: String
});

mongoose.model('Event', EventSchema);