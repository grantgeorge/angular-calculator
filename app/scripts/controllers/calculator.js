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
    this.result = '';

    this.clickNumber = function(number) {
      this.currentOutput = this.currentOutput + number;
    };

    this.operation = function(op) {
      this.operations +=  this.currentOutput;
      if (this.operations.indexOf('=') > 0) {
        this.operations = this.operations.slice(0, this.operations.indexOf('='));
      }
      if (this.operations[this.operations.length-1].match(/[\/\+\-\*]/)) {
        this.operations = this.operations.substring(0,this.operations.length-1);
        this.operations += op;
        return;
      }
      this.operations += op;
      this.currentOutput = '';
    };

    this.evaluate = function() {
      this.operations +=  this.currentOutput;
      this.result = eval(this.operations);
      this.currentOutput = this.result.toString();
      this.operations += '=' + this.result;
    };

    this.clear = function() {
      this.currentOutput = '';
      this.operations = '';
    };

  });
