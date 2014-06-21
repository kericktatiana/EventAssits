/*
 * Dashboard.js - Controller 
 * Specific to the currentUser, display the events
**/

'use strict';

angular.module('angularFullApp')
	.controller('DashboardCtrl', function ($scope, $http) {
		$http.get('/api/getEvents').success(
			function(getEvents) {
				$scope.getEvents = getEvents;
			});
	});