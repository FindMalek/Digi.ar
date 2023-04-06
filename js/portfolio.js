$(document).ready(function() {
    $('.project-gallery-menu li:first').addClass('active');
    $('.gallery-item').fadeIn();

    $('.filter').click(function() {
        var category = $(this).data('filter');

        if ($(this).hasClass('active')) {
            return;
        }

        if (category == 'all') {
            $('.gallery-item').fadeIn();
        } else {
            $('.gallery-item').fadeOut();
            setTimeout(function() {
                $('.gallery-item-' + category).fadeIn();
            }, 300);
        }

        $('.filter').removeClass('active');
        $(this).addClass('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const filterCategory = this.getAttribute("data-filter");

            if ($(this).hasClass('active')) {
                return;
            }

            galleryItems.forEach((item) => {
                item.style.display = "none";
            });

            setTimeout(() => {
                galleryItems.forEach((item) => {
                    const classes = item.getAttribute("class");
                  
                    if (classes.split(' ').map(c => c.trim()).includes(filterCategory.substring(1)) || filterCategory === "all") {
                        item.style.display = "inline-block";
                    }
                  });
            }, 100);
        });
    });
});