/**
 * createEvent.js - controller
 * controller for form creating events
**/

'use strict';

angular.module('angularFullApp')
	.controller('CreateEventCtrl', function ($scope, Eventing, $location, $rootScope) {
			
		$scope.event = {};
		$scope.errors = {};

		$scope.createEvent = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Eventing.createEvent({
					title: $scope.event.title,
					userId: $rootScope.currentUser.id,
					date: $scope.event.date,
					setUp: $scope.event.setUp,
					startTime: $scope.event.startTime,
					strike: $scope.event.strike,
					description: $scope.event.description
				}, function(event) {
					var eventId = event._id;
					$location.path('/event/' + eventId);
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
		};//createEvent



	});//controller