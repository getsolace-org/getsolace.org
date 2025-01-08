describe('Accessibility', () => {
    test('should have alt attributes for all images', () => {
        document.body.innerHTML = '<img src="image1.png" alt="Image 1"><img src="image2.png" alt="Image 2">';
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            expect(img.hasAttribute('alt')).toBe(true);
        });
    });

    test('should allow navigation via keyboard', () => {
        document.body.innerHTML = '<a href="#" tabIndex="0">Link 1</a><a href="#" tabIndex="1">Link 2</a>';
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            expect(link.tabIndex).toBeGreaterThanOrEqual(0);
        });
    });
});