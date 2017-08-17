/* Attribute Directive used to add hover effect to individual project boxes. */

app.directive("projectBox", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
          $(elem).hover(
            function() {
              $( elem ).append( $( "<h1><span></span></h1>" ) );
              $( elem ).find("span:last").addClass("glyphicon");
              $( elem ).find("span:last").addClass("glyphicon-eye-open");
              $( elem ).css({
                "background-color": "#ADEAE2",
                "opacity": "0.7",
                "box-shadow": "1px 1px 2px rgb(100,100,100)"
              });

            }, function() {
              $( elem ).find( "h1:last" ).remove();
              $( elem ).css({
                "background-color": "white",
                "opacity": "initial",
                "box-shadow": "initial"
              });
            }
          );
        }
      }
});
