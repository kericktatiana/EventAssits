/**
 * Category.js - Controller
 * Controller for categories
 *
 * Obtain default categories
 * load currentUser unqiue categories
**/

'use strict';


angular.module('angularFullApp')
	.controller('CategoryCtrl', function ($scope, $http) {
		
		//get default categories from Broute
		$http.get('/api/getCategories').success(
			function(getCategories) {
				$scope.getCategories = getCategories;
			});
	});