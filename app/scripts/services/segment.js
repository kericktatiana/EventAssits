/** 
 * segment.js - Service
 * put and get methods for segments
**/

'use strict';

angular.module('angularFullApp')
	.factory('Segment', function ($resource) {
		return $resource('/api/segments/:id', {
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
