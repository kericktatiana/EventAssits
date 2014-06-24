/**
 * Event.js - Controller
 * specified event and its segements and crew
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http, $routeParams) {

		var currentEvent = $routeParams.id;

		$http.get('/api/events/' + currentEvent).success(
			function(event) {
				$scope.event = event.shape;

				console.log($scope.event);

			});
	});

// this is where I want to call segments and loop through

