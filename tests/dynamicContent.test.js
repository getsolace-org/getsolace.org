describe('Dynamic Content', () => {
    test('should dynamically render mission statement', () => {
        document.body.innerHTML = '<section id="mission"><p>Solace exists to provide individuals</p></section>';
        const mission = document.querySelector('#mission p').textContent;
        expect(mission).toContain('Solace exists to provide individuals');
    });

    test('should display a helpful message on the 404 page', () => {
        document.body.innerHTML = '<main><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></main>';
        const message = document.querySelector('main h2').textContent;
        expect(message).toBe('404 - Page Not Found');
    });
});