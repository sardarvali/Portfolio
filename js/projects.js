// Projects Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Project Filtering
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects with animation
            projectItems.forEach(item => {
                // Initial animation setup
                gsap.to(item, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            gsap.to(item, {
                                scale: 1,
                                opacity: 1,
                                duration: 0.3,
                                delay: 0.1
                            });
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    });
    
    // Project Modal Animations
    const projectModals = document.querySelectorAll('.modal');
    
    projectModals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            const modalContent = this.querySelector('.modal-content');
            const featureList = this.querySelectorAll('.feature-list li');
            const techTags = this.querySelectorAll('.tech-tag');
            const modalImg = this.querySelector('.project-modal-img');
            
            // Reset animations
            gsap.set(modalContent, { scale: 0.8, opacity: 0 });
            gsap.set(featureList, { x: -20, opacity: 0 });
            gsap.set(techTags, { scale: 0.8, opacity: 0 });
            gsap.set(modalImg, { y: 20, opacity: 0 });
            
            // Animate modal content
            gsap.to(modalContent, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.2)"
            });
            
            // Animate modal image
            gsap.to(modalImg, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2
            });
            
            // Animate feature list items
            featureList.forEach((item, index) => {
                gsap.to(item, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3 + (index * 0.1)
                });
            });
            
            // Animate tech tags
            techTags.forEach((tag, index) => {
                gsap.to(tag, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.5 + (index * 0.1),
                    ease: "back.out(1.7)"
                });
            });
        });
    });
    
    // Project Card Hover Animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const img = card.querySelector('.project-img img');
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');
        
        // Create hover animation timeline
        const tl = gsap.timeline({ paused: true });
        
        tl.to(img, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out"
        })
        .to(overlay, {
            opacity: 0.95,
            duration: 0.3
        }, 0)
        .to(content, {
            y: -10,
            opacity: 1,
            duration: 0.3
        }, 0);
        
        // Add hover listeners
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
    });
    
    // Initialize AOS for scroll animations
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
});
