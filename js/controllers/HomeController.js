// Controller for home page. Contains overview, project list, experience, and hobbies. Return json of projects for detail.

app.controller('HomeController', ['$scope', 'projects', '$routeParams', function($scope, projects, $routeParams) {

  /* With ng-view, the initial view does not respond to document ready function. Use viewContentLoaded to set height of initial home image view. */
    $scope.$on('$viewContentLoaded', function() {
      setHeight();
      setMargin();
    });
  /*
  projects.success(function(data) {
    $scope.detail = data;
  });*/

}]);
