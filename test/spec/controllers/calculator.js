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

  describe('clickNumber()', function () {
    it('should concat the clicked number to currentOutput when its blank', function () {
      CalculatorCtrl.currentOutput = '';
      CalculatorCtrl.clickNumber('3');
      expect(CalculatorCtrl.currentOutput).toBe('3');
    });
    it('should concat the clicked number to currentOutput when its set', function () {
      CalculatorCtrl.currentOutput = '3554';
      CalculatorCtrl.clickNumber('3');
      expect(CalculatorCtrl.currentOutput).toBe('35543');
    });
  });

  describe('operation()', function() {
    it('should add the current output to operations', function () {
      CalculatorCtrl.currentOutput = '3';
      CalculatorCtrl.operation('+');
      expect(CalculatorCtrl.operations.indexOf('3') > -1).toBeTruthy();
    });
    it('should add operation to operations after the current output', function () {
      CalculatorCtrl.currentOutput = '3';
      CalculatorCtrl.operation('+');
      expect(CalculatorCtrl.operations).toBe('3+');
    });
    it('should slice an = and operations thereafter', function () {
      CalculatorCtrl.operations = '3+4=7';
      CalculatorCtrl.operation('+');
      expect(CalculatorCtrl.operations).toBe('3+4+');
    });
    it('should reset current output', function() {
      CalculatorCtrl.currentOutput = '3';
      CalculatorCtrl.operation('+');
      expect(CalculatorCtrl.currentOutput).toBe('');
    });
    it('should replace an operator if it\'s the last operation', function() {
      CalculatorCtrl.currentOutput = '3';
      CalculatorCtrl.operation('+');
      CalculatorCtrl.operation('-');
      expect(CalculatorCtrl.operations).toBe('3-');
    });
  });

  describe('evaluate()', function () {
    it('should calculate a result', function() {
      CalculatorCtrl.operations = '3+';
      CalculatorCtrl.currentOutput = '4';
      CalculatorCtrl.evaluate();
      expect(CalculatorCtrl.result).toBe(7);
    });
    it('sets the current output to the result', function() {
      CalculatorCtrl.operations = '3+';
      CalculatorCtrl.currentOutput = '4';
      CalculatorCtrl.evaluate();
      expect(CalculatorCtrl.currentOutput).toBe('7');
    });
    it('should concat the current output and result to operations', function() {
      CalculatorCtrl.operations = '3+';
      CalculatorCtrl.currentOutput = '4';
      CalculatorCtrl.evaluate();
      expect(CalculatorCtrl.operations).toBe('3+4=7');
    });
  });

  describe('clear()', function() {
    it('should clear currentOutput', function() {
      CalculatorCtrl.currentOutput = '9999';
      CalculatorCtrl.clear();
      expect(CalculatorCtrl.currentOutput).toBe('');
    });
    it('should clear operations', function() {
      CalculatorCtrl.operations = '9*3=27';
      CalculatorCtrl.clear();
      expect(CalculatorCtrl.operations).toBe('');
    });
  });

});
