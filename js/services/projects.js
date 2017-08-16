/* Service to retrieve data of projects. To reduce size of projects controller. */
app.factory('projects', ['$http', function($http) {
  return $http.get('json/projects.json')
  /*
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });*/
}]);
