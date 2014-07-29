/** 
 * cateogrySettings.js - Controller
 * Edit/delete of selected category
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategorySettingsCtrl', function ($scope, $http, $routeParams, Category, Categoring, $location) {

		var currentCategory = $routeParams.id;

		$scope.category = {};
		$scope.errors = {};

		//edit the current category
		$scope.editCategory = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Categoring.editCategory(
					currentCategory,
					$scope.category.newCategoryName
				).then( function() {
					$scope.message = 'Category successfully updated';
				});
			}
		};

		//delete the current category
		$scope.deleteCategory = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				if (window.confirm('are you sure?')) {
					Categoring.deleteCategory(
						currentCategory
					).then( function() {
						$location.path('/categories')
						$scope.message = 'Category successfully deleted';
					});
				}
			}
		};

		//get the category information
		$http.get('/api/categorys/' + currentCategory).success(
			function(showCategory) {
				$scope.showCategory = showCategory.shape;

				$scope.category.newCategoryName = showCategory.shape.categoryName;

			});

	});//controller