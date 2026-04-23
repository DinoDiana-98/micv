// ============================================
// CINAPRI CV SCRIPT - Leidy Diana Principe Quispe
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupLoadingScreen();
    setupMobileMenu();
    setupScrollEffects();
    setupScrollAnimations();
    setupWhatsAppButton();
    setupBackToTop();
    setupSmoothScroll();
    setupParallaxFix();
});

// Loading Screen
function setupLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loadingScreen');
            if (loader) loader.classList.add('hidden');
        }, 600);
    });
}

// Menú Móvil
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        btn.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Cerrar al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            btn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Efecto scroll: navbar y botón "volver arriba"
function setupScrollEffects() {
    const topBtn = document.getElementById('topBtn');
    if (!topBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    });

    topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Animaciones al hacer scroll
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}

// WhatsApp (detecta móvil vs escritorio)
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

// Scroll suave para enlaces internos
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

// Corrige parallax en algunos móviles
function setupParallaxFix() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
        document.querySelectorAll('.parallax').forEach(el => {
            el.style.backgroundAttachment = 'scroll';
        });
    }
}
