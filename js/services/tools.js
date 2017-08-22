/* Service to retrieve data of tools skills. To reduce size of home page view. */
app.factory('tools', ['$http', function($http) {
  return $http.get('json/tools.json')

         .then(function(response) {

           console.log(response.data.tools);
           return response.data;

         });

}]);
