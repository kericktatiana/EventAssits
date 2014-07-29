/** 
 * segmentSettings.js - Controller
 * Edit/delete of selected segment
**/

'use strict';

angular.module('angularFullApp')
	.controller('SegmentCtrl', function ($scope, Segment, Segmenting, $http, $routeParams, $location) {

		//get the id of currentSegment
		var currentSegment = $routeParams.id;

		var currentEvent = '';

		//get the segment information
		$http.get('/api/segments/' + currentSegment).success(
			function(showSegment) {
				$scope.showSegment = showSegment.shape;

				currentEvent = showSegment.shape.eventId;

				$scope.segment.newTime = showSegment.shape.time;
				$scope.segment.newDuration = showSegment.shape.duration;
				$scope.segment.newCategory = showSegment.shape.category;
				$scope.segment.newTask = showSegment.shape.task;
			});

		$scope.segment = {};
		$scope.errors = {};

		$scope.editSegment = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Segmenting.editSegment(
					currentSegment,
					$scope.segment.newTime,
					$scope.segment.newDuration,
					$scope.segment.newCategory,
					$scope.segment.newTask
				).then (function() {
					$scope.message = 'Event succesfully updated';
				});
			}
		};

		//categories for drop down
		$http.get('/api/getCategorys').success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		$scope.deleteSegment = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				if(window.confirm('Are you sure?')) {
					Segmenting.deleteSegment(
						currentSegment
					).then( function() {
						$location.path('/event/' + currentEvent);
						$scope.message = 'Segement succesfully deleted';
					});
				}
			}
		};


	});//controller