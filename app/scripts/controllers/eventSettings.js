/** 
 * eventSettings.js - Controller
 * Edit the information of current event
**/

'use strict';

angular.module('angularFullApp')
	.controller('EventSettingsCtrl', function ($scope, Event, Eventing, $http, $routeParams) {
	
		//get the id of current event
		var currentEvent = $routeParams.id;

		$scope.event = {};
		$scope.errors = {};

		$scope.editEvent = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Eventing.editEvent(
					currentEvent,
					$scope.event.newTitle,
					$scope.event.newDate,
					$scope.event.newSetUp,
					$scope.event.newStartTime,
					$scope.event.newStrike,
					$scope.event.newDescription
				).then( function() {
					$scope.message = 'Event successfully updated.';
				});
			}
		};

		$scope.deleteEvent = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				window.alert('are you sure?');
				// Eventing.deleteEvent({
				// 	eventId: currentEvent
				// })
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

				var monthEdit = date.getMonth()+1;

				//set event info to form values
				$scope.event.newTitle = showEvent.shape.title;
				$scope.event.newDate = monthEdit + '/' + day + '/' + year;
				$scope.event.newSetUp = showEvent.shape.setUp;
				$scope.event.newStartTime = showEvent.shape.startTime;
				$scope.event.newStrike = showEvent.shape.strike;
				$scope.event.newDescription = showEvent.shape.description;

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


	});