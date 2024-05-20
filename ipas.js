document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Intersection Observer for slide animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    slides.forEach(slide => {
        observer.observe(slide);
    });

    // Toggle the navigation menu
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });

    // Ensure the hamburger menu is visible on load
    hamburger.style.visibility = 'visible';
});