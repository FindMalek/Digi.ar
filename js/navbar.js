$(document).ready(function() {
    var navbar = $("#navbar");
    var navbarLogo = $(".navbarLogo");
    var navLinks = $(".nav-link");

    $(".nav-link").click(function() {
        // Delay the closing of the navbar by 200ms
        setTimeout(function() {
            $(".navbar-toggler").trigger("click");
        }, 200);
    });

    // Toggle menu icon every 5 seconds, only if the menu is closed
    let isMenuClosed = true;
    let intervalId = setInterval(function() {
        if ($(".navbar-toggler").attr("aria-expanded") !== "true") {
            if (isMenuClosed) {
                // Slide out the menu icon
                $("#menu-closed-icon").css("left", "100%");
                $("#menu-closed-icon").one("transitionend", function() {
                    $("#menu-closed-icon").hide();

                    // Slide in the "Get Started" button
                    $(".get-started-button").css({
                        left: '0%'
                    });

                    $(".get-started-button").show().animate({
                        left: 'calc(10% - 1px)'
                    }, 600);

                });
            } else {
                // Slide out the "Get Started" button
                $(".get-started-button").css("left", "100%");

                $(".get-started-button").one("transitionend", function() {
                    $(".get-started-button").hide();

                    // Slide in the menu icon
                    $("#menu-closed-icon").show();
                    $("#menu-closed-icon").css("left", "calc(100% - 42px)");
                });
            }

            isMenuClosed = !isMenuClosed;
        }
    }, 5000);

    // Toggle menu and hide the "Get Started" button when the menu is opened
    $(".navbar-toggler").click(function() {
        if ($(".navbar-toggler").attr("aria-expanded") === "true") {
            $(".get-started-button").hide();
        } else {
            $(".get-started-button").show();
            $("#menu-closed-icon").show();
            $("#menu-open-icon").hide();
        }

        $("#menu-closed-icon").toggle();
        $("#menu-open-icon").toggle();
        $(".get-started-button").hide();
    });

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
        } else if ($(window).width() <= 992) {
            navbar.removeClass("scroll");
            navbarLogo.attr("src", "images/Digital Army - black.svg");
            navLinks.removeClass("text-dark").addClass("text-light");
        }
    });
});