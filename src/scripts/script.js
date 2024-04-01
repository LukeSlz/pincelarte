// Assuming you have some way of determining which nav item is currently selected
// For example, you could add an "active" class to the selected item

// Get all the nav items
var navItems = document.querySelectorAll('.navbar-nav .nav-item');

// Loop through each nav item
navItems.forEach(function(navItem) {
    // Check if this nav item is the active one
    if (navItem.classList.contains('active')) {
        // Add the 'primary-bg' class to the anchor tag within this nav item
        var anchor = navItem.querySelector('.nav-link');
        anchor.classList.add('primary-bg');
    } else {
        // If it's not the active one, make sure it doesn't have the 'primary-bg' class
        var anchor = navItem.querySelector('.nav-link');
        anchor.classList.remove('primary-bg');
    }
});