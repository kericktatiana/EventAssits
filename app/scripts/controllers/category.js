/**
 * category.js - Controller - Front end
 * Specifc to the current user
 * gather defaults and users categories
 *
 * Allow user to create categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategoryCtrl', function ($scope, $http, Categoring, $location, $routeParams, $rootScope) {


		$scope.category = {};
		$scope.errors = {};

		$scope.createCategory = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Categoring.createCategory({
					userId: $rootScope.currentUser.id,
					categoryName: $scope.category.categoryName
				}, function(category) {
					$scope.getCategorys.push(category);
				})
				.then( function() {
				})
				.catch( function(err) {
					err = err.data;
					$scope.errors = {};

					//update validity of form fields that match the mongoose errors
					angular.forEach(err.errors, function(error, field) {
						form[field].$setValidity('mongoose', false);
						$scope.errors[field] = error.message;
					});
				});
			}
		};

		//get event's categories
		$http.get('/api/getCategorys').success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});


	});//controller
