window.onload = function() {
    $(".navbar-nav .nav-link").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    new WOW().init();
};