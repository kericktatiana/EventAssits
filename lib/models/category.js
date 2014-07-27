/** 
 * category.js - Mongoose Model, Database
 * Schema for categorys
 *
 * categorys are unique to the user not the event, some categorys already exist but can be edited, added (with autocomplete form), and deleted
 *
 * eventId
 * categoryName: specific name for the category
**/

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Category Schema
--------------------*/
var CategorySchema = new Schema({
	userId: String,
	categoryName: { type: String, lowercase: true }
});


/* Virtuals
-------------------*/
CategorySchema
	.virtual('categoryInfo')
	.get(function() {
		return {
			'id': this._id,
			'categoryName': this.categoryName
		};
	});

CategorySchema
	.virtual('shape')
	.get(function() {
		return {
			'id': this._id,
			'categoryName': this.categoryName
		};
	});


/* Pre-save hook
-------------------*/
CategorySchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Category', CategorySchema);


