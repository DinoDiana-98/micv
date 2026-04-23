// ============================================
// CINAPRI CV SCRIPT - Leidy Diana Principe Quispe
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollEffects();
    setupScrollAnimations();
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
