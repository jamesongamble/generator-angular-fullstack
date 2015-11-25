'use strict';

angular.module('smartstartApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
