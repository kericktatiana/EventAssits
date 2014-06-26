/**
 * Categoring.js - Service
 * Factory methods for category functionality
 * dependent on category.js serivce
**/

'use strict';

angular.module('angularFullApp')
	.factory('Categoring', function Categoring($location, $rootScope, Category) {

		return {

			/* Create a new Category

			   @param {object} - category
			   @param {function} callback - optional
			   return {Promise}
			--------------------------------------*/
			createCategory: function(category, callback) {
				var cb = callback || angular.noop;

				return Category.save(category, function(category) {
					$rootScope.currentCategory = category;
					return cb(category);
				},
				function(err) {
					return cb(err);
				}).$promise;
			},

		};

	}); //factory