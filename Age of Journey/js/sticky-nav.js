$(document).ready(function(){
    $(window).scroll(function(){
        $('.nav-inner').toggleClass('fixed', $(window).scrollTop() >= 50);
    });
});