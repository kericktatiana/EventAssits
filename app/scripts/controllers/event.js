/**
 * Event.js - Controller
 * specified event and its segements and crew
 *
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventCtrl', function ($scope, $http, $location, $routeParams, Segmenting) {

		//get the id of current event
		var currentEvent = $routeParams.id;

		//$scope.segment = {};
		$scope.errors = {};

		$scope.addSegment = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Segmenting.addSegment({
					eventId: currentEvent,
					time: $scope.segment.time,
					duration: $scope.segment.duration,
					category: $scope.segment.category,
					task: $scope.segment.task
				}, function(segment){
					$scope.getSegments.push(segment);
				})
				.catch( function(err) {
					err = err.data;
					$scope.errors = {};

					//update validity of form fields that match the mongoose errors
					angular.forEach(err.errors, function(error, field) {
						form[field].$setValidity('mongoose', false);
						$scope.errors[field] = error.message;
					});
				})
				.then(function(){
					$scope.submitted = false;
					$scope.segment = {};
				});
			}
		};

		//get the event information
		$http.get('/api/events/' + currentEvent).success(
			function(showEvent) {
				//define scope
				$scope.showEvent = showEvent.shape;

				//declare event date var
				var dateStr = showEvent.shape.date;
				//date vars
				var date = new Date(dateStr);
				var day = date.getDate()+1;
				var month = date.getMonth()+1;
				var year = date.getFullYear();

				//convert 0-11 months to strings
				switch (new Date().getMonth()) {
					case 0:
						month = 'Janurary';
						break;
					case 1:
						month = 'Feburary';
						break;
					case 2:
						month = 'March';
						break;
					case 3:
						month = 'April';
						break;
					case 4:
						month = 'May';
						break;
					case 5:
						month = 'June';
						break;
					case 6:
						month = 'July';
						break;
					case 7:
						month = 'August';
						break;
					case 8:
						month = 'September';
						break;
					case 9:
						month = 'October';
						break;
					case 10:
						month = 'November';
						break;
					case 11:
						month = 'December';
						break;
				}

				//event date var
				var eventDate = month + ' ' + day + ' ' + year;

				//mongo date now human form
				showEvent.shape.date = eventDate;

				//time vars
				var setUp = showEvent.shape.setUp;
				var startTime = showEvent.shape.startTime;
				var strike = showEvent.shape.strike;

				//convert time function
				function tConvert (time) {
				  // Check correct time format and split into components
				  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

				  if (time.length > 1) { // If time format correct
				    time = time.slice (1);  // Remove full string match value
				    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
				    time[0] = +time[0] % 12 || 12; // Adjust hours
				  }
				  return time.join (''); // return adjusted time or original string
				}//tConvert

				//mongo times now human form
				showEvent.shape.setUp = tConvert(setUp);

				showEvent.shape.startTime = tConvert(startTime);

				showEvent.shape.strike = tConvert(strike);

			});

		//get the categories for drop down
		$http.get('/api/getCategorys').success(function(getCategorys) {
				$scope.getCategorys = getCategorys;
			});

		//get the event's segments
		$http.get('/api/getSegments/' + currentEvent).success( function(getSegments) {
			$scope.getSegments = getSegments;

			$scope.timeSort = 'time';

		});

	}); //controller

