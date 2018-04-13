var app = angular.module('App', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../index.ejs',
    controller: 'mainController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
