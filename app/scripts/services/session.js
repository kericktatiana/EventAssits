'use strict';

angular.module('angularFullApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
