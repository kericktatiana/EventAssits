/**
 * crew.js - Controller - Front end
 * Specifc to the current event
 * send and recieve crew information of event
 *
 * requires categories
**/

'use strict';

angular.module('angularFullApp')
	.controller('CrewCtrl', function ($http, $scope, $location, Crewing) {

		$scope.crew = {};
		$scope.errors = {};

		$scope.addCrew = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Crewing.addCrew({
					//need event id
					crewName: $scope.crew.crewName
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

	});//controller