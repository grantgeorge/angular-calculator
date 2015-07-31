'use strict';

/**
 * @ngdoc function
 * @name angularCalcApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the angularCalcApp
 */
angular.module('angularCalcApp')
  .controller('CalculatorCtrl', function () {

    this.currentOutput = '';
    this.operations = '';

    this.clickNumber = function(number) {
      this.currentOutput = this.currentOutput + number;
    }

    this.operation = function(op) {
      this.operations +=  this.currentOutput;
      if (this.operations.indexOf('=') > 0) {
        this.operations = this.operations.slice(0, this.operations.indexOf('='));
      }
      this.operations += op;
      this.currentOutput = '';
    }

    this.evaluate = function() {
      this.operations +=  this.currentOutput;
      var result = eval(this.operations);
      this.currentOutput = result;
      this.operations += '=' + result;
    }

    this.clear = function() {
      this.currentOutput = '';
      this.operations = '';
    }

  });
