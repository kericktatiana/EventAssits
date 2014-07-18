/**
 * category.js - Controller - Front end
 * Specifc to the current user
 * gather defaults and users categories
 *
 * Allow user to create categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CategoryCtrl', function ($scope, $http, Categoring, $location, $routeParams) {

		var currentEvent = $routeParams.id;

		$scope.category = {};
		$scope.errors = {};

		$scope.createCategory = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Categoring.createCategory({
					eventId: currentEvent,
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

		//get event's categories
		$http.get('/api/getCategorys/' + currentEvent).success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		//get event info for back btn
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				$scope.showEvent = showEvent.shape;
			});


	});//controller
