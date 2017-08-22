//Main app module.
var app = angular.module('InteractiveCV', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
    	controller: 'HomeController',
   		templateUrl: 'views/home.html'
  	})
  	.when('/projects/:id', {
    	controller: 'ProjectController',
      templateUrl: 'views/projects.html'
  	})
  	.otherwise({
    	redirectTo: '/'
  	});
});
