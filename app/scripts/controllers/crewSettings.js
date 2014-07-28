/** 
 * crewSettings.js - Controller
 * Edit/delete of selected crew 
 * accessible from event/crew
**/

'use strict';

angular.module('angularFullApp')
	.controller('CrewSettingsCtrl', function ($scope, $http, $routeParams, Crew, Crewing) {
		var currentCrew = $routeParams.id;

		$scope.crew = {};
		$scope.errors = {};

		//get crew information
		$http.get('/api/crews/' + currentCrew).success(function(showCrew) {
			$scope.showCrew = showCrew.shape;

			//add existing date to inputs
			$scope.crew.newCategory = showCrew.shape.category;
			$scope.crew.newCrewMember = showCrew.shape.crewMember;
		});

		$scope.editCrew = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				Crewing.editCrew(
					$scope.crew.newCategory,
					$scope.crew.newCrewMember
				).then(function() {
					$scope.message = 'Crew successfully updated';
				});
			}
		};

		$scope.deleteCrew = function(form) {
			$scope.submitted = true;

			if(form.$valid) {
				window.alert('are you sure?');
			}
		};

		//categories for drop down
		$http.get('/api/getCategorys').success(function(getCategorys) {
				$scope.getCategorys = getCategorys;

			});

		
	});//controller