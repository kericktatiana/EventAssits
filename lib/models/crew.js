/** 
 * crew.js - Mongoose Model, Database
 * Schema for the crew
 *
 * crew is unique to the event
 *
 * eventId
 * crewMember: the peron's name
 * category: the category of which the crew Member belongs to - dependent of category collection
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/* Crew Schema
-------------------*/
var CrewSchema = new Schema({
	eventId: String,
	crewMember: String,
	category: String,
});


/* Validations
------------------------*/
CrewSchema.path('crewMember').required(true);
CrewSchema.path('category').required(true);


/* Pre-save hook
-----------------------*/
CrewSchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Crew', CrewSchema);

