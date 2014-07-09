/*
 * segmenting.js - Service
 * Factory methods for segment functionality 
 * dependent on segment.js service
 */

'use strict';

angular.module('angularFullApp')
	.factory('Segmenting', function Segmenting($location, $rootScope, Segment, Session, $cookieStore) {

		//Get current Event from cookie
		$rootScope.currentSegment = $cookieStore.get('segment') || null;
		$cookieStore.remove('segment');

		return {


			/**
			 * Add a new Segment
			 *
			 * @param {object} segment - segment info
			 * @param {function} callback - optional
			 * return {Promise}
			 */
			addSegment: function(segment, callback) {
				var cb = callback || angular.noop;

				return Segment.save(segment,
					function(segment) {
						$rootScope.currentSegment = segment;
						return cb(segment);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},

			/**
			 * Gets all available informaition on segmented segment
			 *
			 * @return {Object} event
			 */
			currentSegment: function() {
				return Segment.get();
			},


		};//return

	});//factory