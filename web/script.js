// ========== LANDING PAGE ==========
document.addEventListener('DOMContentLoaded', function () {
    const clickMeBtn = document.getElementById('clickMeBtn');
    if (clickMeBtn) {
        // Animate title
        const myText = document.querySelector('.my-text');
        const portfolioText = document.querySelector('.portfolio-text');
        myText.style.opacity = '0';
        portfolioText.style.opacity = '0';
        setTimeout(() => {
            myText.style.opacity = '1';
            portfolioText.style.opacity = '1';
            myText.style.transform = 'rotate(-5deg) translateY(5px)';
            portfolioText.style.transform = 'translateY(-5px)';
        }, 500);

        // CLICK ME → go to portfolio.html
        clickMeBtn.addEventListener('click', function () {
            this.textContent = 'Loading... 🌸';
            this.style.backgroundColor = '#fff';
            this.style.color = '#8d1a4f';
            this.disabled = true;
            setTimeout(() => {
                window.location.href = 'portfolio.html';
            }, 800);
        });
    }


    // ========== PORTFOLIO PAGE ==========
    if (window.location.pathname.includes('portfolio.html')) {
        document.body.classList.add('portfolio');

        // Smooth scroll
        document.querySelectorAll('.navbar a, .back-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // ← Subtract navbar height
                behavior: 'smooth'
            });
        }
    });
});
        // ========== CONTACT FORM (AJAX) ==========
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const status = document.getElementById('formStatus');
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                status.textContent = 'Sending...';
                status.style.color = '#8d1a4f';

                try {
                    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: json
                    });

                    status.textContent = response.ok 
                        ? 'Message sent! Thank you!' 
                        : 'Failed. Please try again.';
                    status.style.color = response.ok ? 'white' : '#ff6b6b';

                    if (response.ok) {
                        contactForm.reset();
                        setTimeout(() => status.textContent = '', 2000);
                    }
                } catch (err) {
                    status.textContent = '❌ Network error. Try again.';
                    status.style.color = '#ff6b6b';
                    console.error('Error:', err);
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});