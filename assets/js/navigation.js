// navigation.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    // Highlight active link based on URL
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

fetch('/navbar.html')
    .then(response => response.text())
    .then(html => {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = html;
        }
    })
    .catch(error => console.error('Error loading navbar:', error));