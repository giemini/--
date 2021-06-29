$(function() {
    $(".humberA").click(() => {
        $(".humberA").toggleClass("action");
        $(".humberB").toggleClass("action");
        $(".menu").toggleClass("open");
    });
    $(".humberB").click(() => {
        $(".humberA").toggleClass("action");
        $(".humberB").toggleClass("action");
        $(".menu").toggleClass("open");
    });
    $(".nav").click(() => {
        $(".humberA").toggleClass("action");
        $(".humberB").toggleClass("action");
        $(".menu").toggleClass("open");
    });
})
$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 500) {
        $(".top").css("opacity", "1");
    } else {
        $(".top").css("opacity", "0");
    }
});