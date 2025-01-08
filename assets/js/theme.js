// theme.js
document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme
    const themeToApply = savedTheme || 'green';
    document.documentElement.setAttribute('data-theme', themeToApply);

    // Handle theme selection
    colorOptions.forEach(option => {
        option.addEventListener('click', event => {
            const theme = event.target.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });
});
