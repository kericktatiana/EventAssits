/**
 * app.js - angular router
 * 
**/

'use strict';

angular.module('angularFullApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })

      //When user is logged in
      .when('/dashboard', {
        templateUrl: 'partials/user/dashboard',
        controller: 'DashboardCtrl',
        authenticate: true
      })

      //Events
      .when('/createEvent', {
        templateUrl: 'partials/user/event/createEvent',
        controller: 'CreateEventCtrl',
        authenticate: true
      })
      .when('/event/:id', {
        templateUrl: 'partials/user/event/event',
        controller: 'EventCtrl',
        authenticate: true
      })

      //Categories
      .when('/categories', {
        templateUrl: 'partials/user/event/links/category',
        controller: 'CategoryCtrl',
        authenticate: true
      })

      //Crew
      .when('/event/:id/crew', {
        templateUrl: 'partials/user/event/links/crew',
        controller: 'CrewCtrl',
        authenticate: true
      })

      //Event Settings
      .when('/event/:id/eventSettings', {
        templateUrl: 'partials/user/event/links/eventSettings',
        controller: 'EventSettingsCtrl',
        authenticate: true
      })

      //Account settings
      .when('/settings', {
        templateUrl: 'partials/user/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }

    });//rootScope
  });//run