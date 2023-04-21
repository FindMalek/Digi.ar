$(document).ready(function() {
    var navbar = $("#navbar");
    var navbarLogo = $(".navbarLogo");
    var navLinks = $(".nav-link");
    
    // Get the About dropdown menu item
    var aboutDropdown = document.querySelector('#navbarDropdownMenuLink');
    var navbarCollapse = document.querySelector('#navbarToggleExternalContent');
    
    // Add a click event listener to the About dropdown menu item
    aboutDropdown.addEventListener('click', function(event) {
        // Toggle the visibility of the submenu
        var submenu = this.nextElementSibling;
        submenu.classList.toggle('show');
        
        // Remove the 'show' class from the navbar collapse element
        var otherSubmenus = document.querySelectorAll('.dropdown-menu.show');
        
        otherSubmenus.forEach(function(item) {
            if (item != submenu) {
                item.classList.remove('show');
            }
        });
        
        // Prevent the default behavior of the link
        event.preventDefault();
    });
    
    // Trigger the collapse toggle button to close the navbar
    $(".nav-link").click(function() {
        if ($(this).attr('id') !== 'navbarDropdownMenuLink') {
            setTimeout(function() {
                    $("#navbarToggleExternalContent").collapse("hide");
                }
                
                , 200);
        }
    });
    
    var intervalId;
    
    // Add an icon switcher to the navbar toggle button
    $(".navbar-toggler").click(function() {
        var navbar = $(".mobile-nav");
        var button = $(".get-started-button");
        var logo = $(".navbarLogo-mobile");
        
        if ($("#menu-closed-icon").is(":visible")) {
            clearInterval(intervalId); // Clear the interval when the navbar is opened
            button.hide();
            logo.show();
        }
        else {
            intervalId = setInterval(function() {
                if (navbar.hasClass("show-button")) {
                    button.hide();
                    logo.show();
                } else {
                    button.show();
                    logo.hide();
                }
                
                navbar.toggleClass("show-button");
            }, 5000);  
        }
        
        if ($("#menu-closed-icon").is(":visible")) {
            $("#menu-closed-icon").hide();
            $("#menu-open-icon").show();
        } else {
            $("#menu-open-icon").hide();
            $("#menu-closed-icon").show();
        }
    });
    
    // Show the contact button initially
    $(".get-started-button").hide();
    $(".navbarLogo-mobile").show();
    
    // Cycle between logo and contact button every 5 seconds
    intervalId = setInterval(function() {
        var navbar = $(".mobile-nav");
        var button = $(".get-started-button");
        var logo = $(".navbarLogo-mobile");
        
        if (navbar.hasClass("show-button")) {
            button.hide();
            logo.show();
        } else {
            button.show();
            logo.hide();
        }
        
        navbar.toggleClass("show-button");
    }, 5000);
    
    if ($(window).width() > 992 && navbarLogo.attr("src") === "images/Digital Army - white.svg") {
        navbarLogo.attr("src", "images/Digital Army - black.svg");
    }
    
    $(window).scroll(function() {
        if ($(window).width() > 992) {
            if ($(window).scrollTop() > 50) {
                navbar.addClass("scroll");
                navbarLogo.attr("src", "images/Digital Army - white.svg");
                navLinks.removeClass("text-dark").addClass("text-light");
            } else {
                navbar.removeClass("scroll");
                navbarLogo.attr("src", "images/Digital Army - black.svg");
                navLinks.removeClass("text-light").addClass("text-dark");
            }
        } else if ($(window).width() > 992) {
            navbar.removeClass("scroll");
            navbarLogo.attr("src", "images/Digital Army - black.svg");
            navLinks.removeClass("text-light").addClass("text-dark");
        }
    });
    // Add a click event listener to the "About Us" dropdown menu item
    $('#navbarDropdownMenuLink + .dropdown-menu a:first-child').click(function() {
        setTimeout(function() {
                $("#navbarToggleExternalContent").collapse("hide");
            }
            
            , 200);
    });
    // Show/hide the submenu when hovering over the "About" link
    $("#about").hover(function() {
            $(".dropdown-menu").show();
        }
        
        ,
        function() {
            $(".dropdown-menu").hide();
        });
    
    // Add/remove the active class when hovering over the submenu items
    $(".dropdown-menu li a").hover(function() {
            $(this).addClass("active");
        },
        function() {
            $(this).removeClass("active");
        });
});