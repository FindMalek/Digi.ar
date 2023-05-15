$(document).ready(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.gallery-item').show(400);
        }
        else {
            $('.gallery-item').not('.' + filter).hide(200);
            $('.gallery-item').filter('.' + filter).show(400);
        }
    });

    $('.gallery-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});