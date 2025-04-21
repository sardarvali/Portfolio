// Modern Projects Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Animate project items on load
    setTimeout(() => {
        projectItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, 100 * index);
        });
    }, 500);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, 100);
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, 100);
                    } else {
                        item.classList.remove('animate');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // Project Card Hover Effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this.querySelector('.project-img img'), {
                scale: 1.05,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this.querySelector('.project-img img'), {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
    
    // Project Modal Animations
    const projectModals = document.querySelectorAll('.modal');
    
    projectModals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            // Add animation to modal content
            const modalContent = this.querySelector('.modal-content');
            gsap.fromTo(modalContent, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out'
            });
            
            // Animate features list
            const featuresList = this.querySelectorAll('ul li');
            gsap.fromTo(featuresList, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.3,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Animate tech tags
            const techTags = this.querySelectorAll('.tech-tags span');
            gsap.fromTo(techTags, {
                scale: 0.8,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                stagger: 0.05,
                delay: 0.5,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });
    
    // Make sure all project buttons are clickable
    const projectButtons = document.querySelectorAll('.project-links a');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // If this is a modal trigger, let the default behavior happen
            if (this.getAttribute('data-bs-toggle') === 'modal') {
                return;
            }
            
            // If this is a GitHub link, open in new tab
            if (this.getAttribute('href').includes('github.com')) {
                e.preventDefault();
                window.open(this.getAttribute('href'), '_blank');
            }
        });
    });
});
