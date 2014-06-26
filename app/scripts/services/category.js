/**
 * category.js - Service
 * put and get methods for categories
**/

'use strict';

angular.module('angularFullApp')
	.factory('Category', function ($resource) {
		return $resource('/api/categorys/:id', {
			id: '@id'
		}, { //parameters default
			update: {
				method: 'PUT',
				params: {}
			},
			get: {
				method: 'GET',
				params: {
					id: 'me'
				}
			}
		});
	});