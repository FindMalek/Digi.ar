$(document).ready(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.gallery-item').show(400);
        } else {
            $('.gallery-item').not('.' + filter).hide(200);
            $('.gallery-item').filter('.' + filter).show(400);
        }
    });

    $('.gallery-item').magnificPopup({
        delegate: '.pp:visible',
        type: 'ajax',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        callbacks: {
            ajaxContentAdded: function() {
                $(".owl-carousel").each(function(index) {
                    var a = $(this);

                    $(this).owlCarousel({
                        autoplay: a.data('autoplay'),
                        center: a.data('center'),

                        autoplayTimeout: a.data('autoplaytimeout'),
                        autoplayHoverPause: a.data('autoplayhoverpause'),
                        lazyLoad: a.data('lazyload'),

                        loop: a.data('loop'),
                        speed: a.data('speed'),
                        slideBy: a.data('slideby'),

                        dots: a.data('dots'),
                        autoHeight: a.data('autoheight'),
                        autoWidth: a.data('autowidth'),
                        margin: a.data('margin'),
                        stagePadding: a.data('stagepadding'),
                        
                        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                        animateOut: a.data('animateOut'),
                        animateIn: a.data('animateIn'),
                        video: a.data('video'),
                        items: a.data('items'),
                        responsive: {
                            0: {
                                items: a.data('items-xs'),
                            },
                            576: {
                                items: a.data('items-sm'),
                            },
                            768: {
                                items: a.data('items-md'),
                            },
                            992: {
                                items: a.data('items-lg'),
                            }
                        }
                    });
                });
            }
        }
    });
});