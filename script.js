// Configuración de números de contacto
const PHONE_CALL = '51904908206';  // +51 904 908 206 (para llamadas)
const PHONE_WHATSAPP = '51918358296'; // +51 918 358 296 (para WhatsApp)

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    configureSocialButtons();
    setupLoadingScreen();
    setupMobileMenu();
    setupScrollEffects();
    setupAnimations();
    setupStatsCounter();
    setupParticles();
    setupSmoothScroll();
    setupParallax();
    setupTypingEffect();
});

// Configurar botones sociales (WhatsApp, TikTok)
function configureSocialButtons() {
    // Botón TikTok
    const tiktokBtn = document.querySelector('.tiktok-button');
    if (tiktokBtn) {
        tiktokBtn.href = 'https://www.tiktok.com/@cinapri.pq';
    }
    
    // Botón WhatsApp - usando el número correcto para mensajes
    const whatsappBtn = document.getElementById('whatsappButton');
    if (whatsappBtn) {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            whatsappBtn.href = `https://wa.me/${PHONE_WHATSAPP}`;
        } else {
            whatsappBtn.href = `https://web.whatsapp.com/send?phone=${PHONE_WHATSAPP}`;
        }
    }
    
    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Loading Screen
function setupLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) loadingScreen.classList.add('hidden');
        }, 800);
    });
}

// Menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

// Efectos de scroll (navbar, back to top)
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 100) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
        
        if (backToTop) {
            if (window.scrollY > 500) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }
    });
}

// Animaciones al hacer scroll
function setupAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll, .timeline-item');
    
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar inicial
}

// Contador de estadísticas
function setupStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
            }, 20);
        });
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
}

// Partículas flotantes
function setupParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 5 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.background = ['#8a2be2', '#00c896'][Math.floor(Math.random() * 2)];
        p.style.animation = `particle-float ${Math.random() * 20 + 10}s linear infinite`;
        container.appendChild(p);
    }
}

// Scroll suave para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
}

// Efecto parallax en elementos flotantes
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.floating-element').forEach((el, i) => {
            const speed = i === 0 ? 0.2 : (i === 1 ? 0.1 : 0.15);
            el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Efecto de escritura en el subtítulo
function setupTypingEffect() {
    setTimeout(() => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle && subtitle.getAttribute('data-typed') !== 'true') {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            subtitle.setAttribute('data-typed', 'true');
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 40);
                }
            };
            type();
        }
    }, 800);
}

// Efectos hover mejorados para tarjetas (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .contact-card, .stat-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('skill-card')) {
                this.style.transform = 'translateY(-12px) scale(1.03)';
            } else {
                this.style.transform = 'translateY(-10px)';
            }
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
