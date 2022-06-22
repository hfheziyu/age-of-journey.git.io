$(document).ready(function(){
    $(".search-close").addClass("hidden");
    $(".search-bar").addClass("hidden");
    $(".search")
    .click(function(e) {
        $(this)
           .addClass("hidden");
        $(".search-close").removeClass("hidden");
        $(".search-bar").removeClass("hidden");
    });
    $(".search-close")
    .click(function(e) {
        $(this)
            .addClass("hidden");
        $(".search").removeClass("hidden");
        $(".search-bar").addClass("hidden");
    });
});