/**
 * crewing.js - Serivce
 * Factort methods for crew functionality
 * dependent on crew.js sercice
**/

'use strict';

angular.module('angularFullApp')
	.factory('Crewing', function Crewing($location, $rootScope, Crew) {

		return {


			/**
			 * Create a new crew member
			 *
			 * @param {object} category - category info
			 * @param {function} callback - optional
			 * return {Promise}
			 */
			addCrew: function(crew, callback) {
				var cb = callback || angular.noop;

				return Crew.save(crew,
					function(crew) {
						return cb(crew);
					},
					function(err) {
						return cb(err);
					}).$promise;
			},


			/**
			 * Edit Crew
			 *
			 * @param - {String} - newCategory
			 * @param = {String} - newCrewMember
			 **/
			editCrew: function(newCategory, newCrewMember, callback) {
				var cb = callback || angular.noop;

				return Crew.update({
					newCategory: newCategory,
					newCrewMember: newCrewMember
				}, function(crew) {
					return cb(crew);
				}, function(err) {
					return cb(err);
				}).$promise;
			},

			 /** Delete Crew
			  * 
			  * @param - {String} - crewId
			  *
			 **
			 deleteCrew: function(crewId, callback) {
				var cb = callback || angular.noop;

				delete functionality here
			 }**/


			/**
			 * Gets all available informaition on categored category
			 *
			 * @return {Object} category
			 */
			currentCrew: function() {
				return Crew.get();
			},

		};//return

	});//factory