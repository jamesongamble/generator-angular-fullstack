'use strict';

angular.module('<%= scriptAppName %>')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = {
      left: [
        {
          'title': 'Home',
          'link': '/'
        },
        {
          'title': 'Item 1',
          'link': '/item1'
        },
        {
          'title': 'Item 2',
          'link': '/item2'
        }
      ],
      right: [
        {
          'title': 'Hello user',
          'link': '/user'
        }
      ]
    };

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });