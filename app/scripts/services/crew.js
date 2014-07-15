/**
 * crew.js - Service
 * put and get methods for crew
**/

'use strict';

angular.module('angularFullApp')
	.factory('Crew', function ($resource) {
		return $resource('/api/crews/:id', {
			id: '@id'
		}, { //parameters default
			update: {
				method: 'PUT',
				params: {}
			},
			get: {
				method: 'GET',
				params: {
					id:'me'
				}
			}
		});
	});

