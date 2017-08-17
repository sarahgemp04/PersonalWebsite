//Controller for individual project page. Will contain info on a project clicked by user for more info. Returns json of one project given routeParams ID.

app.controller('ProjectController', ['$scope', 'projects', '$routeParams', function($scope, projects, $routeParams) {

  /* With ng-view, the initial view does not respond to document ready function. Use viewContentLoaded to set height of initial home image view. */
  $scope.$on('$viewContentLoaded', function() {
    setHeight();
    setMargin();
  });

  projects.then(function(data) {
    console.log($routeParams.id);
    $scope.project = data[$routeParams.id];
  });

}]);
