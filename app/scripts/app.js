'use strict';

/**
 * @ngdoc overview
 * @name angularCalcApp
 * @description
 * # angularCalcApp
 *
 * Main module of the application.
 */
angular
  .module('angularCalcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'calculator'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
