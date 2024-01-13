const $ = jQuery.noConflict();

// Function to close the nav-main and overlay
function closeNavMenu() {
    const navMain = $('.nav-main');
    const overlay = $('.mobile-sidebar-overlay');

    if (navMain.hasClass('show-nav')) {
        // Hide the navigation menu
        navMain.removeClass('show-nav');
        $('html').css('overflow', ''); // Enable scrolling for the HTML element
        $('body').css('overflow', ''); // Enable scrolling for the HTML element

        // Remove the overlay if it exists
        overlay.remove();
    }
}

// Add event listener to the hamburger menu
$('.header__hamburger-menu').click(function(event) {
    event.preventDefault(); // Prevent the default link behavior
    event.stopPropagation(); // Prevent the click event from bubbling up

    const navMain = $('.nav-main');
    const overlay = $('.mobile-sidebar-overlay');
    const body = $('body');
    const html = $('html');

    if (!navMain.hasClass('show-nav')) {
        // Show the navigation menu
        navMain.addClass('show-nav');
        body.css('overflow', 'hidden'); // Disable scrolling for the HTML element
        html.css('overflow', 'hidden'); // Disable scrolling for the HTML element

        if (overlay.length === 0) {
            // Create and append the overlay if it doesn't exist
            const newOverlay = $('<div>').addClass('mobile-sidebar-overlay');
            body.append(newOverlay);
        }
    } else {
        // Hide the navigation menu
        closeNavMenu();
    }
});

// Add event listener to close the nav-main and overlay when clicking outside
$(document).click(function(event) {
    const navMain = $('.nav-main');
    const overlay = $('.mobile-sidebar-overlay');
    const hamburgerMenu = $('.header__hamburger-menu');

    if (navMain.hasClass('show-nav') && !hamburgerMenu.is(event.target) && !navMain.is(event.target) && !overlay.is(event.target)) {
        closeNavMenu();
    }
});

// Prevent click events from propagating for specific elements inside nav-main
$('.nav-main a, .nav-main ul').click(function(event) {
    event.stopPropagation();
});


$(document).ready(() => {
    function openSidebar() {
        document.getElementById("filterSidebar").style.right = "0";
        $('body').css('overflow', 'hidden'); // Disable scrolling for the HTML element
        $('html').css('overflow', 'hidden'); // Disable scrolling for the HTML element
    }
    function closeSidebar() {
        document.getElementById("filterSidebar").style.right = "-300px";
        $('html').css('overflow', ''); // Enable scrolling for the HTML element
        $('body').css('overflow', ''); // Enable scrolling for the HTML element
    }

    const openSidebarId = document.getElementById("openSidebar");
    const closeSidebarId = document.getElementById("closeSidebar");
    if (openSidebarId && closeSidebarId) {
        openSidebarId.addEventListener("click", openSidebar);
        closeSidebarId.addEventListener("click", closeSidebar);
    }

});
