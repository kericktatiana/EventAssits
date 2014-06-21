/**
 * event.js - Service
 * put and get methods for events
**/

'use strict';

angular.module('angularFullApp')
	.factory('Event', function ($resource) {
		return $resource('/api/events/:id', {
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