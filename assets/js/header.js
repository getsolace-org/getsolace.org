document.addEventListener('DOMContentLoaded', () => {
    fetch('/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = html;
            } else {
                console.error('Header placeholder not found!');
            }
        })
        .catch(error => console.error('Error loading header:', error));
});
