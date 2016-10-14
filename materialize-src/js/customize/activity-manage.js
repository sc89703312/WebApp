$(document).ready(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.toc-wrapper').pushpin({
        top: $('.toc-wrapper').offset().top
    });
    $('.scrollspy').scrollSpy();

    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $('.modal-trigger').leanModal();

    $('select').material_select();
});

/**
 * Created by lenovo on 2016/10/13.
 */
