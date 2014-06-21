/**
 * sessions.js - Service 
 * Factory methods to save sessions
**/

'use strict';

angular.module('angularFullApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
