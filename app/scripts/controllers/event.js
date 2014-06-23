/**
 * Event.js - Controller
 * specified event and its segements and crew
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http) {
		$http.get('/api/showEvent').success(
			function(showEvent) {
				$scope.showEvent = showEvent;
			});
	});