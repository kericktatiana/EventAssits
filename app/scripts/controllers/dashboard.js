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

				for(var i = 0; i < getEvents.length; i++) {
					var event = getEvents[i];

					var eventDate = event.date;

					var date = new Date(eventDate);
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
					}//switch

					//set mongo date to human
					event.date = month + ' ' + day + ' ' + year;

					var futureDate = new Date();
					var numberOfDaysToAdd = 6;
					futureDate.setDate(futureDate.getDate() + numberOfDaysToAdd);
				}

			});
	});