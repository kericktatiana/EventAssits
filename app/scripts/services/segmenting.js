/**
 * Segmenting.js - Service
 * Factory methods for segment functionality
 * dependent on segment.js serive
**/

'use strict';

angular.module('angularFullApp')
	.factory('Segmenting', function Segmenting($location, $rootScope, Session, Segment) {


		return {

			/**
			 * Create a new Segment
			 *
			 * @param {object} segment - segment info
			 * @param {function} callback - optional
			 * return {Promise
			**/
			createSegment: function(segment, callback) {
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


		};//return

	});//factory