/** 
 * cateogrySettings.js - Controller
 * Edit/delete of selected category
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategorySettingsCtrl', function ($scope, $http, $routeParams) {

		var currentCategory = $routeParams.id;

		//get the category information
		$http.get('/api/categorys/' + currentCategory).success(
			function(showCategory) {
				$scope.showCategory = showCategory.shape;


			}
			);

	});//controller