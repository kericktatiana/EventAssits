'use strict';

/*
 * Eventing.js
 * Service middle man between event and functionality
 */

angular.module('angularFullApp')
	.factory('Eventing', function Eventing($location, $rootScope, Session, Event, $cookieStore) {

		//Get current Event from cookie
		$rootScope.currentEvent = $cookieStore.get('event') || null;
		$cookieStore.remove('event');

		return {


			/**
			 * 'Authenticate' event (lack of better desc)
			 *
			 * @param {Object} event - event info
			 * @param {Function} callback - optional
			 * @return {Promise}
			 */
			evented: function(event, callback) {
				var cb = callback || angular.noop;

				return Session.save({
					title: event.title
				}, function(event) {
					$rootScope.currentEvent = event;
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			},


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
		};//return

	});//factory