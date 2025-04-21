// Theme Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update toggle appearance based on current theme
    updateToggleAppearance(currentTheme);
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Get current theme
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            // Toggle theme
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Set the new theme
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
            
            // Update toggle appearance
            updateToggleAppearance(newTheme);
        });
    }
    
    // Function to update toggle appearance
    function updateToggleAppearance(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        const toggleBall = document.querySelector('.theme-toggle-ball');
        
        if (themeToggle && toggleBall) {
            if (theme === 'dark') {
                toggleBall.style.transform = 'translateX(20px)';
                themeToggle.classList.add('dark-mode');
            } else {
                toggleBall.style.transform = 'translateX(0)';
                themeToggle.classList.remove('dark-mode');
            }
        }
    }
});
