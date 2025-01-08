const fs = require('fs');
const path = require('path');

describe('Theme Manager', () => {
    beforeEach(() => {
        // Clear localStorage
        localStorage.clear();
    
        // Reset the DOM
        document.body.innerHTML = '';
    });

    test('should apply saved theme from localStorage', () => {
        // Set a theme in localStorage
        localStorage.setItem('theme', 'blue');
    
        // Load the actual HTML file
        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        // Import and execute the script
        require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
    
        // Assert that the saved theme was applied
        expect(document.documentElement.getAttribute('data-theme')).toBe('blue');
    });
        
    test('should update to the blue theme and save to localStorage on blue button click', () => {
        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        const themeScript = require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
    
        // Find the theme button
        const themeButton = document.querySelector('[data-theme="blue"]');
        themeButton.click();
    
        // Assertions
        expect(localStorage.getItem('theme')).toBe('blue');
        expect(document.documentElement.getAttribute('data-theme')).toBe('blue');
    }); 
        
    test('should update to the green theme and save to localStorage on green button click', () => {
        // Forcefully set the theme to blue
        localStorage.setItem('theme', 'blue');

        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        const themeScript = require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
    
        // Find the theme button
        const themeButton = document.querySelector('[data-theme="green"]');
        themeButton.click();
    
        // Assertions
        expect(localStorage.getItem('theme')).toBe('green');
        expect(document.documentElement.getAttribute('data-theme')).toBe('green');
    });

    test('should default to the green theme and localStorage should be null before any buttons are clicked', () => {
        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        const themeScript = require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
        
        // Assertions
        expect(localStorage.getItem('theme')).toBe(null);
        expect(document.documentElement.getAttribute('data-theme')).toBe('green');
    }); 
    
    test('should ignore invalid theme values', () => {
        // Load the actual HTML file
        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        // Import and execute the script
        require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
    
        // Simulate a button with an invalid theme
        const invalidButton = document.createElement('button');
        invalidButton.setAttribute('data-theme', 'invalid-theme');
        document.body.appendChild(invalidButton);
    
        // Simulate a click
        invalidButton.click();
    
        // Assert that the theme was not changed
        expect(document.documentElement.getAttribute('data-theme')).not.toBe('invalid-theme');
    });    

    test('should default to the green theme if localStorage is empty', () => {
        // Clear localStorage
        localStorage.clear();
    
        // Load the actual HTML file
        const html = fs.readFileSync(path.resolve(__dirname, '../settings/index.html'), 'utf8');
        document.body.innerHTML = html;
    
        // Import and execute the script
        require('../assets/js/theme.js');
        document.dispatchEvent(new Event('DOMContentLoaded')); // Trigger DOMContentLoaded
    
        // Assert that the green theme was applied
        expect(document.documentElement.getAttribute('data-theme')).toBe('green');
    });    
    
});
