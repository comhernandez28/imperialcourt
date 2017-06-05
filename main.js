(function($) {
    "use strict"; // Start of use strict

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


})(jQuery); // End of use strict
