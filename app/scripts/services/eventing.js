/*
 * Eventing.js - Service
 * Factory methods for event functionality 
 * Also includes segment functionality
 * dependent on event.js service
 */

'use strict';

angular.module('angularFullApp')
	.factory('Eventing', function Eventing($location, $rootScope, Session, Event, $cookieStore) {

		//Get current Event from cookie
		$rootScope.currentEvent = $cookieStore.get('event') || null;
		$cookieStore.remove('event');

		return {


			/**
			 * Create a new Event
			 *
			 * @param {object} event - event info
			 * @param {function} callback - optional
			 * return {Promise}
			 */
			createEvent: function(event, callback) {
				var cb = callback || angular.noop;

				return Event.save(event,
					function(event) {
						$rootScope.currentEvent = event;
						return cb(event);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},

			/**
			 * Gets all available informaition on evented event
			 *
			 * @return {Object} event
			 */
			currentEvent: function() {
				return Event.get();
			},

			/**
			 * Check to see if the current event is current
			 *
			 * @return {Boolean}
			 */
			isEvent: function() {
				var event = $rootScope.currentEvent;
				return !!event;
			},

		};//return

	});//factory

