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
    
    // Portfolio Carousel
    const carouselContainer = $(".carousel-container");
    
    // Get the list of project HTML files
    $.ajax({
        url: "src/portfolio-projects/",
        success: function(data) {
            const projectFiles = $(data).find(".portfolio-item");
            
            // Load each project HTML file into the carousel
            projectFiles.each(function(index, file) {
                const fileName = $(file).attr("href");
                carouselContainer.append(`<div class="mix col-md-6 col-lg-4 gallery-item item"><object type="text/html" data="${fileName}" /></div>`);
            });
            
            // Initialize the Owl Carousel
            carouselContainer.owlCarousel({
                items: 4,
                margin: 100,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 50,
                        stagePadding: 20
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                },
                
                center: false,
                dotsEach: false,
                navContainer: ".carousel-nav",
                slideTransition: "linear",
                mouseDrag: true,
                touchDrag: true,
                pullDrag: true,
                freeDrag: false,
                rewind: false,
                startPosition: 0,
            });
        },
        error: function(xhr, status, error) {
            console.log("Failed to load portfolio projects:", error);
        }
    });
});