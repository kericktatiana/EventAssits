/**
 * Event.js - Controller
 * specified event and its segements and crew
 *
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http, $location, $routeParams, Segmenting) {

		//get the id of current event
		var currentEvent = $routeParams.id;

		$scope.segment = {};
		$scope.errors = {};

		$scope.addSegment = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Segmenting.addSegment({
					eventId: currentEvent,
					time: $scope.segment.time,
					duration: $scope.segment.duration,
					category: $scope.segment.category,
					task: $scope.segment.task
				})
				.then( function() {
		          $location.path('/event/' + currentEvent);
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

		//get the event information
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				$scope.showEvent = showEvent.shape;

				console.log(showEvent.segments);
			});

		//get the categories for drop down
		$http.get('/api/getCategorys').success(
			function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		//get the event's segments
		$http.get('/api/getSegments/').success( function(getSegments) {
			$scope.getSegments = getSegments;
			console.log(getSegments);
		});

	}); //controller

