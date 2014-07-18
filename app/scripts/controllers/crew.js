/**
 * crew.js - Controller - Front end
 * Specifc to the current event
 * send and recieve crew information of event
 *
 * requires categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CrewCtrl', function ($http, $scope, $location, Crewing, $routeParams) {

		var currentEvent = $routeParams.id;

		$scope.crew = {};
		$scope.errors = {};

		$scope.addCrew = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Crewing.addCrew({
					//need event id
					eventId: currentEvent,
					category: $scope.crew.category,
					crewMember: $scope.crew.crewMember
				})
				.then( function() {
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

		//get crew
		$http.get('/api/getCrew').success(
			function(getCrew) {
				$scope.getCrew = getCrew;

				console.log(getCrew);
			});

		//get event's categories for crew
		$http.get('/api/getCategorys/' + currentEvent).success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		//get event info for back btn
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				$scope.showEvent = showEvent.shape;
			});

	});//controller