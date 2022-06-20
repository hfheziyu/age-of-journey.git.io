$(document).ready(function(){
    $(".expand-list ul")
       .addClass("hidden");
    $(".expand-title")
    .click(function(e) {
        e.preventDefault();
        $(this)
           .parent().siblings().children("ul")
           .addClass("hidden");
        $(this)
          .siblings("ul")
          .toggleClass("hidden");
    });
});