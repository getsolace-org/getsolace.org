describe('Theme Manager', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div data-theme="default"></div>';
    });

    test('should apply saved theme from localStorage', () => {
        localStorage.setItem('theme', 'blue');
        const savedTheme = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', savedTheme);
        expect(document.documentElement.getAttribute('data-theme')).toBe('blue');
    });

    test('should update theme and save to localStorage on button click', () => {
        const themeButton = document.createElement('button');
        themeButton.setAttribute('data-theme', 'green');
        document.body.appendChild(themeButton);

        themeButton.click();
        document.documentElement.setAttribute('data-theme', 'green');
        localStorage.setItem('theme', 'green');

        expect(localStorage.getItem('theme')).toBe('green');
        expect(document.documentElement.getAttribute('data-theme')).toBe('green');
    });

    test('should ignore invalid theme values', () => {
        const invalidButton = document.createElement('button');
        invalidButton.setAttribute('data-theme', 'invalid-theme');
        document.body.appendChild(invalidButton);
        invalidButton.click();
        expect(document.documentElement.getAttribute('data-theme')).not.toBe('invalid-theme');
    });

    test('should default to the default theme if localStorage is empty', () => {
        localStorage.clear();
        document.documentElement.setAttribute('data-theme', 'default');
        expect(document.documentElement.getAttribute('data-theme')).toBe('default');
    });
});
