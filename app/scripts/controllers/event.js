/**
 * Event.js - Controller
 * specified event and its segements and crew
 *
 * functions for sending and recieving segments
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http, $routeParams, Segmenting, $location) {

		//get the id of current event
		var currentEvent = $routeParams.id;

		//get the event information
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				$scope.showEvent = showEvent.shape;

			});

		//create segment
		$scope.createSegment = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Segmenting.createSegment({
					eventId: currentEvent,
					time: $scope.segment.time,
					duration: $scope.segment.duration,
					category: $scope.segment.category,
					task: $scope.segment.task
				})
				.then( function() {
					//this may not work
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

	});

// this is where I want to call segments and loop through

