// ============================================
// CINAPRI CV SCRIPT - Leidy Diana Principe Quispe
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollEffects();
    setupScrollAnimations();
    setupSnapTransitions();
    setupWhatsAppButton();
    setupBackToTop();
    setupSmoothScroll();
});

// Menú Móvil
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = nav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

// Scroll: botón "volver arriba"
function setupScrollEffects() {
    const topBtn = document.getElementById('topBtn');
    if (!topBtn) return;

    window.addEventListener('scroll', () => {
        topBtn.classList.toggle('visible', window.scrollY > 500);
    });
}

// Animaciones al hacer scroll
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}


// Transición de polvo reversible al entrar o salir de cada sección.
function setupSnapTransitions() {
    const sections = document.querySelectorAll('.parallax, .section-dark, footer');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sections.length || !('IntersectionObserver' in window) || reduceMotion) return;

    sections.forEach(section => {
        section.classList.add('snap-transition-section');

        const particleLayer = document.createElement('div');
        particleLayer.className = 'snap-particles';
        particleLayer.setAttribute('aria-hidden', 'true');

        const particleCount = window.matchMedia('(max-width: 640px)').matches ? 42 : 76;
        for (let i = 0; i < particleCount; i += 1) {
            const particle = document.createElement('span');
            particle.className = 'snap-particle';
            particle.style.setProperty('--x', `${Math.random() * 100}%`);
            particle.style.setProperty('--y', `${Math.random() * 100}%`);
            particle.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 220}px`);
            particle.style.setProperty('--drift-y', `${(Math.random() - 0.5) * 180}px`);
            particle.style.setProperty('--spin', `${(Math.random() - 0.5) * 180}deg`);
            particle.style.setProperty('--delay', `${Math.random() * 260}ms`);
            particle.style.setProperty('--size', `${1 + Math.random() * 3}px`);
            particleLayer.appendChild(particle);
        }
        section.appendChild(particleLayer);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const section = entry.target;

            if (entry.isIntersecting) {
                if (section.classList.contains('snap-away')) {
                    section.classList.remove('snap-away');
                    section.classList.add('snap-return');
                    window.setTimeout(() => section.classList.remove('snap-return'), 1000);
                }
            } else {
                section.classList.remove('snap-return');
                section.classList.add('snap-away');
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: '-5% 0px -5% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// WhatsApp
function setupWhatsAppButton() {
    const btn = document.getElementById('whatsappBtn');
    if (!btn) return;

    const phone = '51918358296';
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    btn.href = isMobile ? `https://wa.me/${phone}` : `https://web.whatsapp.com/send?phone=${phone}`;
}

// Volver arriba
function setupBackToTop() {
    const btn = document.getElementById('topBtn');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Scroll suave
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });
}
