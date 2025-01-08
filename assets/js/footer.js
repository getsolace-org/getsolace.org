// footer.js
fetch('/footer.html')
    .then(response => response.text())
    .then(html => {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = html;
            // Dynamically set the current year
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        }
    })
    .catch(error => console.error('Error loading footer:', error));
