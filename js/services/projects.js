/* Service to retrieve data of projects. To reduce size of projects controller. */
app.factory('projects', ['$http', function($http) {
  return $http.get('json/projects.json')

         .then(function(response) {
           console.log("soi am working");
           console.log(response.data.projects);
           return response.data.projects;

         });

}]);
