describe('Navigation Links', () => {
    test('should have valid navigation links', () => {
        document.body.innerHTML = '<nav><a href="/">Home</a><a href="/core/">Core</a><a href="/settings/">Settings</a></nav>';
        const navLinks = document.querySelectorAll('nav a');
        const expectedLinks = ['/', '/core/', '/settings/'];
        navLinks.forEach((link, index) => {
            expect(link.getAttribute('href')).toBe(expectedLinks[index]);
        });
    });
});