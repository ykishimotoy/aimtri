// Flame Animation for Overview Section
class FlameAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.flames = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        // Create flame particles
        const numFlames = Math.floor(this.canvas.width / 50);
        for (let i = 0; i < numFlames; i++) {
            this.flames.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + Math.random() * 100,
                size: Math.random() * 60 + 40,
                speed: Math.random() * 1 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: Math.random() * 0.03 + 0.01
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.flames.forEach(flame => {
            // Update position
            flame.y -= flame.speed;
            flame.wobble += flame.wobbleSpeed;

            // Reset if flame goes off screen
            if (flame.y + flame.size < 0) {
                flame.y = this.canvas.height + flame.size;
                flame.x = Math.random() * this.canvas.width;
            }

            // Calculate wobble offset
            const wobbleX = Math.sin(flame.wobble) * 20;

            // Draw flame with gradient
            const gradient = this.ctx.createRadialGradient(
                flame.x + wobbleX, flame.y, 0,
                flame.x + wobbleX, flame.y, flame.size
            );

            // Flame colors - from center (bright) to edges (transparent)
            gradient.addColorStop(0, `rgba(255, 200, 0, ${flame.opacity * 0.8})`);
            gradient.addColorStop(0.3, `rgba(255, 100, 0, ${flame.opacity * 0.6})`);
            gradient.addColorStop(0.6, `rgba(255, 50, 0, ${flame.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(flame.x + wobbleX, flame.y, flame.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Add some flicker effect
            flame.opacity = Math.max(0.05, Math.min(0.4, flame.opacity + (Math.random() - 0.5) * 0.02));
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Blazing Flame Animation for Programs Section (more intense)
class BlazingFlameAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.flames = [];
        this.sparks = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        // Create more intense flame particles
        const numFlames = Math.floor(this.canvas.width / 30);
        for (let i = 0; i < numFlames; i++) {
            this.flames.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + Math.random() * 200,
                size: Math.random() * 100 + 60,
                speed: Math.random() * 2.5 + 1.5,
                opacity: Math.random() * 0.5 + 0.3,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: Math.random() * 0.05 + 0.02,
                wobbleIntensity: Math.random() * 40 + 20
            });
        }

        // Create sparks
        const numSparks = Math.floor(this.canvas.width / 20);
        for (let i = 0; i < numSparks; i++) {
            this.createSpark();
        }
    }

    createSpark() {
        this.sparks.push({
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + Math.random() * 100,
            size: Math.random() * 4 + 2,
            speed: Math.random() * 3 + 2,
            opacity: Math.random() * 0.8 + 0.2,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.1 + 0.05,
            life: 1.0,
            decay: Math.random() * 0.01 + 0.005
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw flames
        this.flames.forEach(flame => {
            // Update position
            flame.y -= flame.speed;
            flame.wobble += flame.wobbleSpeed;

            // Reset if flame goes off screen
            if (flame.y + flame.size < 0) {
                flame.y = this.canvas.height + flame.size;
                flame.x = Math.random() * this.canvas.width;
            }

            // Calculate wobble offset (more intense)
            const wobbleX = Math.sin(flame.wobble) * flame.wobbleIntensity;

            // Draw flame with intense gradient
            const gradient = this.ctx.createRadialGradient(
                flame.x + wobbleX, flame.y, 0,
                flame.x + wobbleX, flame.y, flame.size
            );

            // More intense flame colors
            gradient.addColorStop(0, `rgba(255, 255, 200, ${flame.opacity * 0.9})`);
            gradient.addColorStop(0.2, `rgba(255, 200, 0, ${flame.opacity * 0.8})`);
            gradient.addColorStop(0.4, `rgba(255, 120, 0, ${flame.opacity * 0.7})`);
            gradient.addColorStop(0.6, `rgba(255, 60, 0, ${flame.opacity * 0.5})`);
            gradient.addColorStop(0.8, `rgba(200, 0, 0, ${flame.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(100, 0, 0, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(flame.x + wobbleX, flame.y, flame.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Intense flicker effect
            flame.opacity = Math.max(0.2, Math.min(0.8, flame.opacity + (Math.random() - 0.5) * 0.05));
        });

        // Draw sparks
        this.sparks.forEach((spark, index) => {
            // Update position
            spark.y -= spark.speed;
            spark.wobble += spark.wobbleSpeed;
            spark.life -= spark.decay;

            // Remove dead sparks
            if (spark.life <= 0 || spark.y < -10) {
                this.sparks.splice(index, 1);
                this.createSpark();
                return;
            }

            const wobbleX = Math.sin(spark.wobble) * 10;

            // Draw spark
            const sparkGradient = this.ctx.createRadialGradient(
                spark.x + wobbleX, spark.y, 0,
                spark.x + wobbleX, spark.y, spark.size
            );

            const alpha = spark.opacity * spark.life;
            sparkGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
            sparkGradient.addColorStop(0.5, `rgba(255, 200, 100, ${alpha * 0.8})`);
            sparkGradient.addColorStop(1, `rgba(255, 100, 0, 0)`);

            this.ctx.fillStyle = sparkGradient;
            this.ctx.beginPath();
            this.ctx.arc(spark.x + wobbleX, spark.y, spark.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Ripple Animation for AI Dojo Section
class RippleAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.ripplePoints = [];
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
        this.initRipplePoints();
    }

    initRipplePoints() {
        // Create fixed points where ripples originate
        this.ripplePoints = [
            { x: this.canvas.width * 0.2, y: this.canvas.height * 0.3 },
            { x: this.canvas.width * 0.5, y: this.canvas.height * 0.5 },
            { x: this.canvas.width * 0.8, y: this.canvas.height * 0.7 },
            { x: this.canvas.width * 0.3, y: this.canvas.height * 0.7 },
            { x: this.canvas.width * 0.7, y: this.canvas.height * 0.3 }
        ];
    }

    init() {
        // Start creating ripples periodically
        this.lastRippleTime = 0;
        this.rippleInterval = 1200; // Create new ripple every 1.2 seconds
    }

    createRipple(point) {
        this.ripples.push({
            x: point.x,
            y: point.y,
            radius: 0,
            maxRadius: Math.max(this.canvas.width, this.canvas.height) * 0.6,
            speed: 1.5,
            opacity: 0.6,
            lineWidth: 3,
            color: {
                r: 255,
                g: Math.floor(Math.random() * 100 + 100), // 100-200
                b: 0
            }
        });
    }

    animate(timestamp = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Create new ripples periodically
        if (timestamp - this.lastRippleTime > this.rippleInterval) {
            const randomPoint = this.ripplePoints[Math.floor(Math.random() * this.ripplePoints.length)];
            this.createRipple(randomPoint);
            this.lastRippleTime = timestamp;
        }

        // Draw and update ripples
        this.ripples.forEach((ripple, index) => {
            // Update ripple
            ripple.radius += ripple.speed;
            ripple.opacity = Math.max(0, 1 - (ripple.radius / ripple.maxRadius));
            ripple.lineWidth = 3 * ripple.opacity;

            // Remove ripple if it's too faded
            if (ripple.opacity <= 0) {
                this.ripples.splice(index, 1);
                return;
            }

            // Draw ripple circle
            this.ctx.beginPath();
            this.ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, ${ripple.opacity * 0.8})`;
            this.ctx.lineWidth = ripple.lineWidth;
            this.ctx.stroke();

            // Draw inner glow
            const gradient = this.ctx.createRadialGradient(
                ripple.x, ripple.y, ripple.radius - 20,
                ripple.x, ripple.y, ripple.radius
            );
            gradient.addColorStop(0, `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, 0)`);
            gradient.addColorStop(1, `rgba(${ripple.color.r}, ${ripple.color.g}, ${ripple.color.b}, ${ripple.opacity * 0.15})`);

            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });

        requestAnimationFrame((ts) => this.animate(ts));
    }
}

// Wave Animation for Value Proposition Section
class WaveAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.waves = [];
        this.time = 0;
        this.resize();
        this.init();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        const section = this.canvas.parentElement;
        this.canvas.width = section.offsetWidth;
        this.canvas.height = section.offsetHeight;
    }

    init() {
        // Create multiple wave layers
        this.waves = [
            {
                amplitude: 30,
                frequency: 0.01,
                speed: 0.02,
                yOffset: this.canvas.height * 0.3,
                color: { r: 255, g: 69, b: 0, a: 0.15 },
                lineWidth: 2
            },
            {
                amplitude: 40,
                frequency: 0.008,
                speed: 0.015,
                yOffset: this.canvas.height * 0.5,
                color: { r: 255, g: 107, b: 53, a: 0.2 },
                lineWidth: 3
            },
            {
                amplitude: 50,
                frequency: 0.012,
                speed: 0.025,
                yOffset: this.canvas.height * 0.7,
                color: { r: 255, g: 165, b: 0, a: 0.12 },
                lineWidth: 2
            },
            {
                amplitude: 35,
                frequency: 0.015,
                speed: 0.018,
                yOffset: this.canvas.height * 0.85,
                color: { r: 200, g: 0, b: 0, a: 0.1 },
                lineWidth: 1.5
            }
        ];
    }

    drawWave(wave, phase) {
        this.ctx.beginPath();

        // Draw the wave using sine function
        for (let x = 0; x < this.canvas.width; x++) {
            const y = wave.yOffset +
                     Math.sin(x * wave.frequency + phase) * wave.amplitude;

            if (x === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }

        // Create gradient for the wave
        const gradient = this.ctx.createLinearGradient(
            0, wave.yOffset - wave.amplitude,
            0, wave.yOffset + wave.amplitude
        );
        gradient.addColorStop(0, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${wave.color.a})`);
        gradient.addColorStop(1, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0)`);

        // Draw stroke
        this.ctx.strokeStyle = `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${wave.color.a * 1.5})`;
        this.ctx.lineWidth = wave.lineWidth;
        this.ctx.stroke();

        // Fill area below the wave
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.closePath();
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw each wave layer
        this.waves.forEach(wave => {
            this.drawWave(wave, this.time * wave.speed);
        });

        this.time += 1;
        requestAnimationFrame(() => this.animate());
    }
}

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    // Initialize flame animation for overview section
    const flameAnimation = new FlameAnimation('flameCanvas');

    // Initialize blazing flame animation for programs section
    const blazingFlameAnimation = new BlazingFlameAnimation('blazingFlameCanvas');

    // Initialize ripple animation for AI Dojo section
    const rippleAnimation = new RippleAnimation('rippleCanvas');

    // Initialize wave animation for value proposition section
    const waveAnimation = new WaveAnimation('waveCanvas');
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
