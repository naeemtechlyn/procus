(function ($) {
    
    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // accordion
        $(".accordion-list > li.active .answer").show();
        $('.accordion-list > li > .answer').hide();
    
        $('.accordion-list > li').click(function() {
            if ($(this).hasClass("active")) {
                    $(this).removeClass("active").find(".answer").slideUp();
                } else {
                $(".accordion-list > li.active .answer").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
            }
            return false;
        });

        // portfolio slider
        $('.portfolio-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            ]
        });
        
        // brand slider
        $('.brand-slider').slick({
            dots: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 1200,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: true,
        });

    });

    $(window).on('scroll', function () {

        // back to top scroll
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // navbar fix
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
