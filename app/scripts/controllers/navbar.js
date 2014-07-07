/**
 * navbar.js - Controller
 * to determin display regarding user login
**/

'use strict';

angular.module('angularFullApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Account Settigs',
      'link': '/settings'
    }, {
      'title': 'Users Name',
      'link': '/dashboard'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
