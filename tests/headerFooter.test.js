describe('Header and Footer', () => {
    test('should display the correct header title', () => {
        document.body.innerHTML = '<header><h1>Solace</h1></header>';
        const headerTitle = document.querySelector('header h1').textContent;
        expect(headerTitle).toBe('Solace');
    });

    test('should display the current year in the footer', () => {
        const currentYear = new Date().getFullYear();
        document.body.innerHTML = '<footer><p>&copy; <span id="currentYear"></span> Solace. All rights reserved.</p>';
        
        // Simulate the JavaScript that dynamically sets the current year
        document.getElementById('currentYear').textContent = currentYear;
    
        const footer = document.querySelector('footer p').textContent;
        expect(footer).toContain(currentYear.toString());
    });    
});