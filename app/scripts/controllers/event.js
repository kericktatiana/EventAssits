/**
 * Event.js - Controller
 * specified event and its segements and crew
 *
 * functions for sending and recieving segments
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http, $location, $routeParams) {

		//get the id of current event
		var currentEvent = $routeParams.id;

		//get the event information
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				$scope.showEvent = showEvent.shape;

			});

		$http.get('/api/getCategorys').success(
			function(getCategorys) {
				$scope.getCategorys = getCategorys;

				console.log('testing');
			});

	}); //controller

