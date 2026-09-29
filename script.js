document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navLinks');
  const menuButton = document.getElementById('mobileMenuBtn');
  const topButton = document.getElementById('topBtn');
  const whatsappButton = document.getElementById('whatsappBtn');
  const veil = document.getElementById('transitionVeil');
  const sections = [...document.querySelectorAll('section[id]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let changing = false;

  function closeMenu() {
    nav?.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
    const icon = menuButton?.querySelector('i');
    if (icon) icon.className = 'fas fa-bars';
  }

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    const icon = menuButton.querySelector('i');
    if (icon) icon.className = open ? 'fas fa-times' : 'fas fa-bars';
  });

  function updateTopButton() {
    topButton?.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();

  if (whatsappButton) {
    const phone = '51918358296';
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    whatsappButton.href = mobile ? `https://wa.me/${phone}` : `https://web.whatsapp.com/send?phone=${phone}`;
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
  }

  function particles(direction) {
    if (!veil) return;
    veil.replaceChildren();
    const colors = ['#78eed5', '#a887ff', '#a9d4ff', '#d8e5ff'];
    for (let i = 0; i < 46; i++) {
      const p = document.createElement('span');
      p.className = 'dust-particle';
      const x = 8 + Math.random() * 84;
      const y = 8 + Math.random() * 84;
      const drift = (45 + Math.random() * 145) * direction;
      p.style.cssText = `--x:${x}%;--y:${y}%;--size:${2 + Math.random()*4}px;--dx:${drift}px;--dy:${-20 - Math.random()*95}px;--delay:${Math.random()*.2}s;--dust-color:${colors[i%colors.length]}`;
      veil.appendChild(p);
    }
  }

  function sectionAtViewport() {
    const middle = window.innerHeight * .5;
    return sections.find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= middle && rect.bottom > middle;
    }) || sections[0];
  }

  function scrollToSection(target, animated) {
    const navHeight = document.querySelector('.nav')?.getBoundingClientRect().height || 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight);
    if (animated) {
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      const prior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, top);
      document.documentElement.style.scrollBehavior = prior;
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const hash = anchor.getAttribute('href');
      const target = hash === '#' ? document.getElementById('about') : document.getElementById(hash.slice(1));
      if (!target || changing) return;
      event.preventDefault();
      closeMenu();
      history.pushState(null, '', '#' + target.id);
      const source = sectionAtViewport();
      if (reduceMotion.matches || source === target || !veil) {
        scrollToSection(target, true);
        return;
      }

      changing = true;
      particles(target.offsetTop < source.offsetTop ? -1 : 1);
      source.classList.add('section-dissolving');
      veil.classList.remove('is-returning');
      veil.classList.add('is-active');
      window.setTimeout(() => {
        scrollToSection(target, false);
        source.classList.remove('section-dissolving');
        target.classList.add('section-forming');
        veil.classList.remove('is-active');
        veil.classList.add('is-returning');
      }, 370);
      window.setTimeout(() => {
        target.classList.remove('section-forming');
        veil.classList.remove('is-returning');
        veil.replaceChildren();
        changing = false;
      }, 940);
    });
  });

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, { threshold: .06, rootMargin: '0px 0px 30px 0px' });
    document.querySelectorAll('.fade-in').forEach(card => observer.observe(card));
    document.body.classList.add('js-ready');
  }
});
