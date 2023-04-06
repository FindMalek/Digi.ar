$(document).ready(function() {
    // Activate the first filter on page load
    $('.project-gallery-menu li:first').addClass('active');
    $('.gallery-item').fadeIn(); // show all gallery items initially

    $('.filter').click(function() {
        var category = $(this).data('filter');

        // If the clicked category is already active, exit the function
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

        // Activate the clicked filter and deactivate others
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Get all the filter buttons
    const filterButtons = document.querySelectorAll(".filter");
    
    // Get all the gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");
    
    // Attach a click event listener to each filter button
    filterButtons.forEach((button) => {
        button.addEventListener("click", function() {
            // Get the filter category
            const filterCategory = this.getAttribute("data-filter");
            
            // Loop through all gallery items
            galleryItems.forEach((item) => {
                console.log('Display:', item.style.display);
                // Get the list of classes of the current gallery item
                const classes = item.getAttribute("class");
                
                // Check if the filter category is present in the list of classes
                if (classes.split(' ').map(c => c.trim()).includes(filterCategory.substring(1)) || filterCategory === "all") {
                  item.style.display = "inline-block";
                } else {
                  item.style.display = "none";
                }
                console.log('Display:', item.style.display);
              });

        });
    });
});
