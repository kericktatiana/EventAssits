/**
 * categoring.js - Serivce
 * Factort methods for categoy functionality
 * dependent on category.js sercice
**/

'use strict';

angular.module('angularFullApp')
	.factory('Eventing', function Eventing($location, $rootScope, Category) {

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
						$rootScope.currentCategory = category;
						return cb(category);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},

			/**
			 * Gets all available informaition on categored category
			 *
			 * @return {Object} category
			 */
			currentCategory: function() {
				return Category.get();
			},

		};//return

	});//factory