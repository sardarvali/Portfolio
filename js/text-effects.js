// js/text-effects.js
document.addEventListener('DOMContentLoaded', () => {
    const applyTextDistortionEffect = (element, customLetters = null) => {
        const originalText = element.dataset.originalText || element.textContent;
        element.dataset.originalText = originalText; // Store it if not already stored
        let intervalId = null;
        const letters = customLetters || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        const animationDuration = 800; // Total duration of the effect
        const shuffleInterval = 50; // How often to change letters

        element.addEventListener('mouseenter', () => {
            let iteration = 0;
            clearInterval(intervalId); // Clear any existing interval

            intervalId = setInterval(() => {
                element.textContent = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration / (animationDuration / shuffleInterval / originalText.length) ) { // Progressively reveal original letters
                            return originalText[index];
                        }
                        if (letter === ' ') return ' '; // Preserve spaces
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration * shuffleInterval >= animationDuration) {
                    clearInterval(intervalId);
                    element.textContent = originalText;
                }
                iteration++;
            }, shuffleInterval);
        });

        element.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            element.textContent = originalText;
        });
    };

    // Apply to logo
    const logoText = document.querySelector('.navbar-brand .logo-text');
    if (logoText) {
        applyTextDistortionEffect(logoText);
    }

    // Apply to nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        // For nav links, we might want to use the data-hover text for the effect
        // or just their display text. Let's use their display text for now.
        applyTextDistortionEffect(link);
    });
});
