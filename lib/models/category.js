/** 
 * category.js - Mongoose Model, Database
 * Schema for categorys
 *
 * categorys are unique to the user not the event, some categorys already exist but can be edited, added (with autocomplete form), and deleted
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
	categoryName: { type: String, lowercase: true }
});

/* Validations
-----------------*/
CategorySchema
  .path('categoryName')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({categoryName: value}, function(err, category) {
      if(err) throw err;
      if(category) {
        if(self.id === category.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'This category is already exists.');

/* Pre-save hook
-------------------*/
CategorySchema
	.pre('save', function(next) {
		if(!this.isNew) return next();

		else
			next();
	});

module.exports = mongoose.model('Category', CategorySchema);


