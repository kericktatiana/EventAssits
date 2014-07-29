/** 
 * segmentSettings.js - Controller
 * Edit/delete of selected segment
**/

'use strict';

angular.module('angularFullApp')
	.controller('SegmentCtrl', function ($scope, Segment, Segmenting, $http, $routeParams) {

		//get the id of currentSegment
		var currentSegment = $routeParams.id;

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
				window.alert('are you sure?');
				//insert functionality here
			}
		};

		//get the segment information
		$http.get('/api/segments/' + currentSegment).success(
			function(showSegment) {
				$scope.showSegment = showSegment.shape;


				$scope.segment.newTime = showSegment.shape.time;
				$scope.segment.newDuration = showSegment.shape.duration;
				$scope.segment.newCategory = showSegment.shape.category;
				$scope.segment.newTask = showSegment.shape.task;
			});

	});//controller