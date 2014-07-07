'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullApp'));

  var MainCtrl,
    DashboardCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    
    scope = $rootScope.$new();
    var currentUser = scope.$root.currentUser;

    if(currentUser === null) {
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    } else {
      DashboardCtrl = $controller('DashboardCtrl', {
        $scope: scope
      });
    }

    
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBeUndefined();
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
