const fs = require('fs');
const path = require('path');

describe('Header and Footer', () => {
    beforeEach(() => {
        // Mock fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                text: () =>
                    Promise.resolve('<footer><p>&copy; <span id="currentYear">2023</span> Solace. All rights reserved.</p>'),
            })
        );
    });

    test('should display the correct header title', () => {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        document.body.innerHTML = html;

        const headerTitle = document.querySelector('header h1').textContent;
        expect(headerTitle).toBe('Solace');
    });

});
