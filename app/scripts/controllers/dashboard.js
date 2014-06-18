'use strict';

/*
 * Dashboard.js
 * controlls the dashboard of the user, gets the user info and listing of events
**/

angular.module('angularFullApp')
	.controller('DashboardCtrl', function ($scope, $http) {
		$http.get('/api/awesomeThings').success(
			function(awesomeThings) {
				$scope.awesomeThings = awesomeThings;
			});
	});