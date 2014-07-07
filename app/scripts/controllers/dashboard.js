/*
 * Dashboard.js - Controller - Front end
 * Specific to the currentUser, display the events
**/

'use strict';

angular.module('angularFullApp')
	.controller('DashboardCtrl', function ($scope, $http) {
		
		//get events from Broute
		$http.get('/api/getEvents').success(
			function(getEvents) {

				$scope.getEvents = getEvents;

			});
	});