document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 200,
            duration: 1000,
        });
    } else {
        console.warn('AOS library not loaded.');
    }

    // Typed.js Initialization
    if (document.getElementById('typed-output') && typeof Typed !== 'undefined') {
        var typed = new Typed('#typed-output', {
            strings: ['Developer', 'Designer', 'Freelancer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500
        });
    } else {
        console.warn('Typed.js element or library not found.');
    }

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu on click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Theme Switcher Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Simple State Object
    const state = {
        theme: localStorage.getItem('portfolio-theme') || 'dark'
    };

    const updateThemeUI = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            document.body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    };

    // Initial Apply
    updateThemeUI(state.theme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Update State (Toggle)
            state.theme = state.theme === 'dark' ? 'light' : 'dark';

            // Persist State
            localStorage.setItem('portfolio-theme', state.theme);

            // Update UI
            updateThemeUI(state.theme);
        });
    }

    // Form Submission (Placeholder)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo, so the email was not actually sent.');
            this.reset();
        });
    }
});
