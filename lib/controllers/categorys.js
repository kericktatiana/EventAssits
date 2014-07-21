/**
 * categorys.js - backend controller (spelled wrong on purpose)
 * functionality for categories
**/

'use strict';

var mongoose = require('mongoose'),
	Category = mongoose.model('Category');


/* Create Category
------------------------*/
exports.createCategory = function (req, res, next) {
	var newCategory = new Category(req.body);
	newCategory.provider = 'local';
	newCategory.save(function(err, category) {
		if (err) 
      return res.json(400, err);
    return res.json(category);
	});
};