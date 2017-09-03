/* Attribute Directive used to add hover effect to individual project boxes. */

app.directive("projectCol", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
          $( elem ).css({
            "-webkit-transition": "background-color 0.5s, opacity 0.5s", /* Safari */
            "transition": "background-color 0.5s, opacity 0.5s",
          });
          $(elem).hover(
            function() {
              $( elem ).append( $( "<h1><span></span></h1>" ) );
              $( elem ).find("span:last").addClass("glyphicon");
              $( elem ).find("span:last").addClass("glyphicon-zoom-in");
              $( elem ).css({
                "background-color": "#ADEAE2",
                "opacity": "0.7",
                "border": "1px solid rgb(75,75,75)",
                "border-radius": "5px"
              });

            }, function() {
              $( elem ).find( "h1:last" ).remove();
              $( elem ).css({
                "background-color": "white",
                "opacity": "initial",
                "border": "none"
              });
            }
          );
        }
      }
});
