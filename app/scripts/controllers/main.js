/**
 * main.js - Controller
 * Main controller, already existed. May be deleted
**/

'use strict';

angular.module('angularFullApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
