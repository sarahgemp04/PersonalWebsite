//Controller for individual project page. Will contain info on a project clicked by user for more info. Returns json of one project given routeParams ID.

app.controller('ProjectController', ['$scope', 'projects', '$routeParams', function($scope, projects, $routeParams) {
  projects.then(function(data) {
    $scope.project = data[$routeParams.id];
  });
}]);
