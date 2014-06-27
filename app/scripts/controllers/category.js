/**
 * category.js - Controller - Front end
 * Specifc to the current user
 * gather defaults and users categories
 *
 * Allow user to create categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategoryCtrl', function ($scope, $http, Categoring, $location, $rootScope) {

		$scope.category = {};
		$scope.errors = {};

		$scope.createCategory = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Categoring.createCategory({
					userId: $rootScope.currentUser.id,
					categoryName: $scope.category.categoryName
				})
				.then( function() {
					//this is not being ran
					$location.reload();
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

		$http.get('/api/getCategorys').success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		$http.get('/api/getUserCategorys').success(function(getUserCategorys) {
				$scope.getUserCategorys = getUserCategorys;
			});

	});//controller
