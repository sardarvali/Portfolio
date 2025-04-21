// Skills Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Skills filtering functionality
    const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
    const skillCategories = document.querySelectorAll('.skill-category');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter skill categories with GSAP animations
            skillCategories.forEach(category => {
                gsap.to(category, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                            category.style.display = 'block';
                            gsap.to(category, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.4,
                                delay: 0.1,
                                ease: "back.out(1.2)"
                            });
                        } else {
                            category.style.display = 'none';
                        }
                    }
                });
            });
        });
    });

    // Initialize skill progress bars with scroll trigger
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        // Create scroll trigger
        ScrollTrigger.create({
            trigger: bar,
            start: "top 80%",
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: "power2.out"
                });
            }
        });
    });

    // Add hover animations to skill cards
    const skillCards = document.querySelectorAll('.skills-card');
    
    skillCards.forEach(card => {
        const icon = card.querySelector('.skills-icon');
        const content = card.querySelector('.skills-content');
        
        // Create hover animation timeline
        const tl = gsap.timeline({ paused: true });
        
        tl.to(card, {
            y: -10,
            boxShadow: '0 15px 40px rgba(31, 38, 135, 0.2)',
            duration: 0.3
        })
        .to(icon, {
            scale: 1.1,
            rotate: -5,
            duration: 0.3
        }, 0)
        .to(content.children, {
            y: -5,
            opacity: 1,
            duration: 0.2,
            stagger: 0.05
        }, 0);
        
        // Add hover listeners
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Add parallax effect to skills section
    const skillsSection = document.querySelector('#skills');
    
    if (skillsSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            skillsSection.style.backgroundPosition = `center ${rate}px`;
        });
    }
});
