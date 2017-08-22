/* Service to retrieve data of languages. */
app.factory('languages', ['$http', function($http) {
  return $http.get('json/languages.json')

         .then(function(response) {

           console.log(response.data.languages);
           return response.data;

         });

}]);
