$(document).ready(function(){
    jQuery(window).scroll(function () {
        jQuery(".nav-wrap").toggleClass('fixed',jQuery(window).scrollTop() > 50);
   });
});