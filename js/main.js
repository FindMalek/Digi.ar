AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});



jQuery(document).ready(function($) {
    "use strict";

    $(".loader").delay(1000).fadeOut("slow");
    $("#overlayer").delay(1000).fadeOut("slow");

    var siteCarousel = function() {
        if ($('.nonloop-block-13').length > 0) {
            $('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                nav: true,
                smartSpeed: 1000,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 0,
                        nav: true,
                        items: 2
                    },
                    1000: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 3
                    },
                    1200: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 4
                    }
                }
            });
        }

        $('.slide-one-item').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1000,
            autoHeight: true,
            autoplay: true,
            pauseOnHover: false,
            nav: true,
            navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
        });
    };
    siteCarousel();

    // navigation
    var OnePageNavigation = function() {
        var navToggler = $('.site-menu-toggle');
        $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
            e.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                'scrollTop': $(hash).offset().top - 0
            }, 1000, 'easeInOutCirc', function() {
                window.location.hash = hash;
            });

        });
    };
    OnePageNavigation();
});