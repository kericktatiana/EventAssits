/**
 * Category.js - Controller - Front end
 * Controller for categories
 *
 * Obtain default categories
 * load currentUser unqiue categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategoryCtrl', function ($scope, $http) {

		//get categories from Broute
		$http.get('/api/getCategories').success( function(getCategories) {
			$scope.getCategories = getCategories;
		});

	});