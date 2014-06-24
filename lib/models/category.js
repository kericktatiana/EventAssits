/** 
 * category.js - Mongoose Model, Database
 * Schema for categories
 *
 * categories are unique to the user not the event, some categories already exist but can be edited, added (with autocomplete form), and deleted
 *
 * userId
 * categoryName: specific name for the category
**/

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Category Schema
--------------------*/
var CategorySchema = new Schema({
	userId: String,
	categoryName: String,
});

/* Validations
-----------------*/
//need to make the categoryName all lower case
//need to check for existing categoryName

/* Pre-save hook
-------------------*/
CategorySchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Category', CategorySchema);


