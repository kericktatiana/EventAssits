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

      //Segments
      .when('/segment/:id', {
        templateUrl: 'partials/user/event/segmentSettings',
        controller: 'SegmentCtrl',
        authenticate: true
      })

      //Categories
      .when('/categories', {
        templateUrl: 'partials/user/event/links/category',
        controller: 'CategoryCtrl',
        authenticate: true
      })
      .when('/category/:id', {
        templateUrl: 'partials/user/event/links/categorySettings',
        controller: 'CategorySettingsCtrl',
        authenticate: true
      })

      //Crew
      .when('/event/:id/crew', {
        templateUrl: 'partials/user/event/links/crew',
        controller: 'CrewCtrl',
        authenticate: true
      })
      .when('/crew/:id', {
        templateUrl: 'partials/user/event/links/crewSettings',
        controller: 'CrewSettingsCtrl',
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
  })//run

.filter('toArray', function () {
  return function (obj) {
    if (!(obj instanceof Object)) {
      return obj;
    }

    return Object.keys(obj).filter(function(key){if(key.charAt(0) !== '$') {return key;}}).map(function (key) {
      return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
    });
  };
});


