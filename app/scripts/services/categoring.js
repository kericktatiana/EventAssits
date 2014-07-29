/**
 * categoring.js - Serivce
 * Factort methods for categoy functionality
 * dependent on category.js sercice
**/

'use strict';

angular.module('angularFullApp')
	.factory('Categoring', function Categoring($location, $rootScope, Category) {

		return {


			/**
			 * Create a new Category
			 *
			 * @param {object} category - category info
			 * @param {function} callback - optional
			 * return {Promise}
			 */
			createCategory: function(category, callback) {
				var cb = callback || angular.noop;

				return Category.save(category,
					function(category) {
						return cb(category);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},

			/**
			 * Edit Category
			 * 
			 * @param - {String} - newCategoryName
			**/
			editCategory: function(id, newCategoryName, callback) {
				var cb = callback || angular.noop;

				return Category.update({
					newId: id,
					newCategoryName: newCategoryName
				}, function(category) {
					return cb(category);
				}, function(err) {
					return cb(err);
				}).$promise;
			},



			/**
			 * Delete Category
			 *
			 * @param - {String} - categoryId
			**/
			deleteCategory: function(id, callback) {
				var cb = callback || angular.noop;

				return Category.delete({
					id: id

				}, function(category) {
					return cb(category);
				}, function(err) {
					return cb(err);
				}).$promise;
			},


		};//return

	});//factory