// Contact Form Enhanced Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Animate form elements on load
    const formGroups = document.querySelectorAll('.contact-form .form-group');
    const formSubmit = document.querySelector('.contact-form .form-submit');
    
    // Animate form elements with delay
    setTimeout(() => {
        formGroups.forEach((group, index) => {
            setTimeout(() => {
                group.classList.add('animate');
            }, 100 * index);
        });
        
        setTimeout(() => {
            formSubmit.classList.add('animate');
        }, 100 * formGroups.length + 100);
    }, 500);
    
    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const formElements = contactForm.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && formElements[i].value.trim() === '') {
                    isValid = false;
                    formElements[i].classList.add('is-invalid');
                    
                    // Add invalid feedback if not exists
                    const parent = formElements[i].closest('.form-group');
                    if (parent && !parent.querySelector('.invalid-feedback')) {
                        const feedback = document.createElement('div');
                        feedback.className = 'invalid-feedback';
                        feedback.textContent = 'This field is required';
                        parent.appendChild(feedback);
                    }
                } else {
                    formElements[i].classList.remove('is-invalid');
                    
                    // Remove invalid feedback if exists
                    const parent = formElements[i].closest('.form-group');
                    if (parent) {
                        const feedback = parent.querySelector('.invalid-feedback');
                        if (feedback) {
                            feedback.remove();
                        }
                    }
                }
            }
            
            if (isValid) {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
                
                // Simulate form submission (replace with actual form submission)
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    let successMessage = document.querySelector('.success-message');
                    
                    if (!successMessage) {
                        successMessage = document.createElement('div');
                        successMessage.className = 'success-message';
                        successMessage.innerHTML = '<i class="fas fa-check-circle me-2"></i> Your message has been sent successfully! I\'ll get back to you soon.';
                        contactForm.appendChild(successMessage);
                    }
                    
                    successMessage.classList.add('show');
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 500);
                    }, 5000);
                }, 1500);
            }
        });
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && this.value.trim() === '') {
                    this.classList.add('is-invalid');
                    
                    // Add invalid feedback if not exists
                    const parent = this.closest('.form-group');
                    if (parent && !parent.querySelector('.invalid-feedback')) {
                        const feedback = document.createElement('div');
                        feedback.className = 'invalid-feedback';
                        feedback.textContent = 'This field is required';
                        parent.appendChild(feedback);
                    }
                } else {
                    this.classList.remove('is-invalid');
                    
                    // Remove invalid feedback if exists
                    const parent = this.closest('.form-group');
                    if (parent) {
                        const feedback = parent.querySelector('.invalid-feedback');
                        if (feedback) {
                            feedback.remove();
                        }
                    }
                }
            });
            
            input.addEventListener('focus', function() {
                this.classList.remove('is-invalid');
                
                // Remove invalid feedback if exists
                const parent = this.closest('.form-group');
                if (parent) {
                    const feedback = parent.querySelector('.invalid-feedback');
                    if (feedback) {
                        feedback.remove();
                    }
                }
            });
        });
    }
    
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon');
            gsap.to(icon, {
                scale: 1.1,
                backgroundColor: 'var(--primary-color)',
                color: '#fff',
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon');
            gsap.to(icon, {
                scale: 1,
                backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                color: 'var(--primary-color)',
                duration: 0.3
            });
        });
    });
});
