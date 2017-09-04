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
              //Only add glyphicon and hover effects with desktop view.
              if($(window).width() > 700) {
                $( elem ).append( $( "<h1><span></span></h1>" ) );
                $( elem ).find("span:last").addClass("glyphicon");
                $( elem ).find("span:last").addClass("glyphicon-zoom-in");
                $( elem ).css({
                  "background-color": "#ADEAE2",
                  "opacity": "0.7",
                  "border": "1px solid rgb(75,75,75)",
                  "border-radius": "5px",
                  "box-shadow": "1px 2px 4px rgba(60,60,60,0.7)",
                  "-webkit-box-shadow": "1px 2px 4px rgba(60,60,60,0.7)",
                  "-moz-box-shadow": "1px 2px 4px rgba(60,60,60,0.7)"
                });
              } else {
                //do nothing.
              }

            }, function() {
              //Only remove glyphicon if added before (if screen width is large enough).
              if($(window).width() > 700) {
                $( elem ).find( "h1:last" ).remove();
                $( elem ).css({
                  "background-color": "white",
                  "opacity": "initial",
                  "border": "none",
                  "box-shadow": "0px 0px 0px rgba(60,60,60,0.5)",
                  "-webkit-box-shadow": "0px 0px 0px rgba(60,60,60,0.5)",
                  "-moz-box-shadow": "0px 0px 0px rgba(60,60,60,0.5)"
                });
              }

            }
          );
        }
      }
});
