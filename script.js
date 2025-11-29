// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards for animation
    const animatedElements = document.querySelectorAll('.section, .program-card, .organizer-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add flame particles interaction on mouse move
    const hero = document.querySelector('.hero');
    const flameParticles = document.querySelectorAll('.flame-particle');

    if (hero && flameParticles.length > 0) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            flameParticles.forEach((particle, index) => {
                const xMove = (clientX / innerWidth - 0.5) * 50;
                const yMove = (clientY / innerHeight - 0.5) * 50;
                const delay = index * 0.1;

                particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
                particle.style.transition = `transform ${0.5 + delay}s ease-out`;
            });
        });
    }

    // Add button hover glow effect enhancement
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse 1s infinite';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.animation = 'none';
        });
    });

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 0 30px rgba(255, 69, 0, 0.5);
            }
            50% {
                box-shadow: 0 0 60px rgba(255, 69, 0, 0.8);
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for sections
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;

                // Apply parallax to flame particles
                flameParticles.forEach((particle, index) => {
                    const speed = 0.5 + (index * 0.1);
                    particle.style.transform = `translateY(${scrolled * speed}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    });

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #FF4500, #FF6B35, #FFA500);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createScrollProgress();

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add CTA button tracking (console log for demonstration)
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const buttonText = btn.querySelector('.btn-text')?.textContent || btn.textContent.trim();
            console.log('CTA Button clicked:', buttonText);
            // Here you could add analytics tracking
        });
    });

    // Responsive navigation for mobile (if needed in future)
    const checkMobile = () => {
        return window.innerWidth <= 768;
    };

    // Add window resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            console.log('Window resized:', window.innerWidth);
            // Add responsive adjustments if needed
        }, 250);
    });
});
