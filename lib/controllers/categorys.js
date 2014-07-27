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

exports.showCategory = function (req, res, next) {
	var categoryId = req.params.id;

	Category.findById(categoryId, function (err, category) {
		if(err) return next(err);
		if(!category) return res.send(404);

		res.send({ shape: category.shape});
	});
};


/* Edit category
-------------------------*/
exports.editCategory = function(req, res, next) {
	var categoryId = req.params.id;

	var newCategoryName = String(req.body.newCategoryName);

	Category.findById(categoryId, function (err, category) {
		category.categoryName = newCategoryName
		category.save(function(err) {
			if (err) return res.send(400);

			res.send(200);
		});
	});
};



/* Delete category
-------------------------*/
exports.deleteCategory = function(req, res, next) {
	var categoryId = req.params.id;

	//functionality to delete here
}



/* Get current category
-------------------------*/
exports.me = function(req, res) {
	res.json(req.event || null);
}