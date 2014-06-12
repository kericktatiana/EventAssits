'use strict';

angular.module('angularFullApp')
  .controller('EventCtrl', function ($scope, $http) {
    $http.get('/api/eventList').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });