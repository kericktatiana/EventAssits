'use strict';

/**
 * Event.js 
 * controls the events and gathers segments
**/

angular.module('angularFullApp')
	.controller('CreateEventCtrl', function ($scope, $http) {
			
		$scope.event = {};
		$scope.errors = {};

		$scope.createEvent = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				//need to create event service?
				Event.createEvent({
					title: $scope.event.title,
					date: $scope.event.date,
					setUp: $scope.event.setUp,
					startTime: $scope.event.startTime,
					strike: $scope.event.strike,
					description: $scope.event.description
				})
				.then( function() {
					//Event created, redirect them to event page
					$location.path('/event');
				})
				.catch( function(err) {
					err = err.data;
					$scope.error = {};

					//update validity of form fields that match the mongoose errors
					angular.forEach(err.errors, function(error, field) {
						form[field].$setValidity('mongoose', false);
						$scope.errors[field] = error.message;
					});
				});
			}
		};//createEvent



	});//controller