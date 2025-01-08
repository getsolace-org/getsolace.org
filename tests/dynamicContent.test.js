const fs = require('fs');
const path = require('path');

describe('Dynamic Content', () => {
    test('should dynamically render mission statement', () => {
        // Load the actual HTML file for the main page
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        document.body.innerHTML = html;

        // Query the mission statement
        const mission = document.querySelector('#mission p').textContent;

        // Validate the mission statement content
        expect(mission).toContain('Solace exists to provide individuals');
    });

    test('should display a helpful message on the 404 page', () => {
        // Load the actual HTML file for the 404 page
        const html = fs.readFileSync(path.resolve(__dirname, '../error/index.html'), 'utf8');
        document.body.innerHTML = html;

        // Query the 404 message
        const message = document.querySelector('main h2').textContent;

        // Validate the 404 message content
        expect(message).toBe('404 - Page Not Found');
    });

});
