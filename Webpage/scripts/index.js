var app = angular.module('App', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/index.html',
    controller: 'mainController'
  });
  .otherwise({
    redirectTo: '/'
  });
});
