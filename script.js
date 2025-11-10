document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Toggles the mobile navigation menu
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            // Toggle the 'aria-expanded' state
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // For a simple mobile menu, you would show/hide the main-nav here
            // For a high-end site, you'd typically implement a smooth slide-out sidebar or modal menu.
            // Example of a basic toggle for demonstration:
            // mainNav.style.display = isExpanded ? 'none' : 'flex'; 

            alert("Mobile Menu Functionality Activated! (You would implement a slide-out menu here for a high-end feel.)");
        });
    }

    // Optional: Add a subtle shadow to the header when the user scrolls
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
    });
});