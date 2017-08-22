/* Controller for the carouself displaying project images and media.
    Src: ui-bootstrap http://angular-ui.github.io/bootstrap/ */

app.controller('CarouselController', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var currIndex = 0;
});
