let toglerBtn = document.querySelector('.togglarIcon');
let navlist = document.querySelector('.navlist');
let NavbarLogo = document.querySelector('.NavbarLogo');
let socialNavbar = document.querySelector('.socialNavbar');
let navLinks = document.querySelectorAll('.navLink');
let homeNavLink = document.querySelector('.navLink[href="#home"]'); // Select Home nav link

// Toggle navigation menu
toglerBtn.addEventListener('click', function () {
    navlist.classList.toggle("activeNav");
    socialNavbar.classList.toggle("activeNav");

    // Ensure Home link is active when the menu opens



});


NavbarLogo.addEventListener('click', function () {
    navLinks.forEach(a => a.classList.remove('active')); // Remove active class from all
    if (homeNavLink) {
        homeNavLink.classList.add('active'); // Set Home as active
    }
});


// Function to hide navbar when clicking outside
document.addEventListener('click', function (event) {
    if (!navlist.contains(event.target) && !toglerBtn.contains(event.target)) {
        hideNav();
    }
});

// Navbar link click event
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function () {
        hideNav();
        navLinks.forEach(a => a.classList.remove('active')); // Remove from all
        navLink.classList.add('active'); // Add active class to clicked link
    });
});

function hideNav() {
    socialNavbar.classList.remove("activeNav");
    navlist.classList.remove("activeNav");
}

// Footer date update
let date = new Date().getFullYear();
document.querySelector(".dateBox").innerText = date;
