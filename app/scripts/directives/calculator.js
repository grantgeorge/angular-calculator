'use strict';

/**
 * @ngdoc directive
 * @name angularCalcApp.directive:calculator
 * @description
 * # calculator
 */
angular.module('angularCalcApp')
  .directive('calculator', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the calculator directive');
      }
    };
  });
