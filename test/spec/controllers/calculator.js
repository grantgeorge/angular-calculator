'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCalcApp'));

  var CalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('clickNumber function', function () {

    it('clickNumber should concat the clicked number to currentOutput', function () {
      CalculatorCtrl.currentOutput = '';
      CalculatorCtrl.clickNumber('3');
      expect(CalculatorCtrl.currentOutput).toBe('3');
    });

  });

});
