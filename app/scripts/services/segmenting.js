/*
 * Eventing.js - Service
 * Factory methods for event functionality 
 * Also includes segment functionality
 * dependent on event.js service
 */

'use strict';

angular.module('angularFullApp')
	.factory('Segmenting', function Segmenting($location, $rootScope, Segment) {


		return {

			/**
			 * Create a new Segment
			 *
			 * @param {object} segment - segment info
			 * @param {function} callback - optional
			 * return {Promise}
			 */
			addSegment: function(segment, callback) {
				var cb = callback || angular.noop;

				return Segment.save(segment,
					function(segment) {
						return cb(segment);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},



			/**
			 * Edit Segment
			 *
			 * @param - {String} - newTime
			 * @param - {String} - newDuration
			 * @param - {String} - newCategory
			 * @param - {String} - newTask
			**/
			editSegment: function(newTime, newDuration, newCategory, newTask, callback) {
				var cb = callback || angular.noop;

				return Segment.update({
					newTime: newTime,
					newDuration: newDuration,
					newCategory: newCategory,
					newTask: newTask
				}, function(segment) {
					return cb(segment);
				}, function(err) {
					return cb(err);
				}).$promise;
			},


			/** 
			 * Delete Segment
			 * 
			 * @param - {String} - segmentId
			**
			deleteSegment: function(segmentId, callback) {
				var cb = callback || angular.noop;

				delete functionality here
			}**/


			currentSegment: function() {
				return Segment.get();
			},

		};//return

	});//factory

