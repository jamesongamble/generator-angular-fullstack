'use strict';

angular.module('<%= scriptAppName %>', [<%- angularModules %>])
  .config(function(<% if (filters.ngroute) { %>$routeProvider<% } if (filters.uirouter) { %>$urlRouterProvider,$stateProvider<% } %>, $locationProvider) {<% if (filters.ngroute) { %>
    
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });<% } if (filters.uirouter) { %>
    $urlRouterProvider
      .otherwise('/');<% } %>

    $locationProvider.html5Mode(true);
  });
