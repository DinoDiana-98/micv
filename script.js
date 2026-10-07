const english = {
  skip: "Skip to content",
  navProfile: "Profile",
  navExperience: "Experience",
  navProjects: "Projects",
  navContact: "Contact",
  heroEyebrow: "PEOPLE · PROCESSES · TECHNOLOGY",
  heroLine1: "I listen to understand.",
  heroLine2: "I build to solve.",
  heroIntro: "I'm Leidy Diana Principe Quispe, also known as Cinapri. My experience spans telephone sales, customer support, fraud prevention, QA, and software development.",
  heroFocus: "I'm interested in prospecting and following up on technology services, combining listening, organization, and technical judgment.",
  heroCta1: "Explore my experience",
  heroCta2: "Let's talk",
  heroAvailable: "OPEN TO OPPORTUNITIES",
  heroCaption: "I connect people and technology to solve problems.",
  profileIndex: "01 / PROFILE",
  profileTitle: "One thread runs through my career: solving problems.",
  profileIntro: "I started in telephone sales and customer service. I later worked in operations, fraud monitoring, and support, bringing that perspective into software development and quality.",
  strength1Title: "Listening and communication",
  strength1Text: "I answered questions and promoted mobile plans by phone, explaining options and helping customers understand them.",
  strength2Title: "Thoughtful follow-up",
  strength2Text: "I verified sales and requests, reported signs of fraud, and escalated incidents to protect the customer experience.",
  strength3Title: "Technical understanding",
  strength3Text: "Today I combine support, development, and QA to understand both people and the systems they use.",
  experienceIndex: "02 / EXPERIENCE",
  experienceTitle: "From conversations to products.",
  experienceIntro: "I've worked with customers, operations, and technical teams. Each stage has strengthened how I listen, follow up, and solve problems.",
  peopleTitle: "Customers and operations",
  peopleIntro: "Sales, service, verification, and prevention.",
  tisDate: "FEB 2020 — FEB 2021",
  tisRole: "Fraud Monitoring Technician",
  tisText: "Within the Prevention team, I verified requests and sales, identified errors and signs of fraud, and reported findings to protect customers and the company.",
  tgestionaDate: "SEP 2019 — FEB 2020",
  tgestionaRole: "Data Entry Specialist",
  tgestionaText: "I used mobile and fixed-line service applications, including Atis, CMS, and Gestel, and escalated widespread incidents.",
  teleatentoDate: "DEC 2016 — SEP 2017",
  teleatentoRole: "Sales Advisor and Back Office Assistant",
  teleatentoText: "On the Argentina telesales team, I promoted mobile plans by phone and answered questions using +Simple, Remedy, and Equifax. I later supported Movistar's fixed-line back office operations.",
  techTitle: "Technology and quality",
  techIntro: "Development, support, QA, and technical design.",
  soltecDate: "MAR — SEP 2026",
  soltecRole: "Developer and Support Analyst",
  soltecText: "Web development with PHP and Laravel, user support, and database work. I used Python and Playwright for automation and assisted with electronic invoicing tests.",
  rolexDate: "NOV 2023 — JAN 2025",
  rolexRole: "Software Developer and Technology Support",
  rolexText: "I implemented solutions and provided technology support; I developed a mobile app with geolocation for attendance tracking.",
  arqkonDate: "JUL — OCT 2023",
  arqkonRole: "BIM Designer",
  arqkonText: "I designed plans for Bicentennial schools following international BIM standards.",
  untDate: "JUN 2022 — FEB 2023",
  untRole: "Web Development Intern",
  untText: "I developed the institutional website, recognized as a contribution to SINEACE accreditation.",
  qaIndex: "IN FOCUS / QA",
  qaTitle: "Checking is part of building.",
  qaText: "At SOLTECJS, I assisted with electronic invoicing tests. I also used Python and Playwright for automation as part of my development and support work.",
  qaTag1: "Electronic invoicing tests",
  projectsIndex: "03 / PROJECTS",
  projectsTitle: "My own products, still growing.",
  projectsIntro: "I show each project's objective and actual status. Both are still in development.",
  statusBuilding: "IN PROGRESS",
  joseKind: "SERVICE CENTER SYSTEM",
  joseText: "I'm building José to organize requests and tickets with traceability. I am also integrating real-time chat and updates.",
  joseFocusLabel: "FOCUS",
  joseFocus: "Service · tickets · follow-up",
  joseStackLabel: "TECHNOLOGIES",
  nissiKind: "INDEPENDENT MANAGEMENT PRODUCT",
  nissiText: "I'm developing NISSI around services, appointments, and availability. Users, roles, processes, and payments are part of its planned scope.",
  nissiFocusLabel: "PLANNED SCOPE",
  nissiFocus: "Services · appointments · users · payments",
  nissiStackLabel: "TECHNOLOGIES",
  techHint: "Hover, focus, or tap an icon to see its name.",
  moreWorkTitle: "Other work and practice",
  moreWorkIntro: "A selection of public work and applied experience.",
  pipelineTitle: "DevSecOps Pipeline",
  pipelineType: "CI/CD security practice with GitHub Actions, Gitleaks, Bandit, and Trivy.",
  viewRepository: "View repository",
  facultyTitle: "Nursing Faculty Website",
  facultyType: "Institutional website developed during my internship at UNT.",
  viewSite: "View website",
  attendanceTitle: "Mobile Attendance App",
  attendanceType: "Geolocation-based solution developed at Rolex Constructores SAC.",
  appliedWork: "Applied experience",
  owaspTitle: "OWASP Top 10 Lab",
  owaspType: "Vulnerability analysis and technical reporting practice.",
  practice: "Practice",
  eduType: "Educational content about scam prevention and digital safety.",
  viewChannel: "View channel",
  contactIndex: "04 / CONTACT",
  contactTitle: "Let's talk.",
  contactText: "I'm interested in prospecting, customer service, and digital projects. If my profile fits your team, I'd be glad to have a conversation."
};

const elements = [...document.querySelectorAll("[data-i18n]")];
const spanish = new Map(elements.map((element) => [element, element.textContent]));
const languageToggle = document.getElementById("languageToggle");
const year = document.getElementById("year");

function applyLanguage(locale) {
  for (const element of elements) {
    const translated = english[element.dataset.i18n];
    element.textContent = locale === "en" && translated ? translated : spanish.get(element);
  }
  document.documentElement.lang = locale;
  document.title = locale === "en"
    ? "Leidy Diana Principe Quispe · Cinapri | Experience and projects"
    : "Leidy Diana Principe Quispe · Cinapri";
  document.querySelector('meta[name="description"]').content = locale === "en"
    ? "Leidy Diana Principe Quispe · Cinapri. Experience in telephone sales, customer service, fraud prevention, QA, and software development."
    : "Leidy Diana Principe Quispe · Cinapri. Experiencia en televentas, atención, prevención de fraude, QA y desarrollo de software.";
  document.querySelector(".site-nav").setAttribute("aria-label", locale === "en" ? "Main navigation" : "Navegación principal");
  document.querySelector(".brand").setAttribute("aria-label", locale === "en" ? "Leidy Diana Principe Quispe, home" : "Leidy Diana Principe Quispe, inicio");
  document.querySelector(".portrait img").alt = locale === "en" ? "Portrait of Leidy Diana Principe Quispe" : "Retrato de Leidy Diana Principe Quispe";
  document.querySelector(".tag-list").setAttribute("aria-label", locale === "en" ? "QA tools and experience" : "Herramientas y experiencia de QA");
  document.getElementById("jose-tech").setAttribute("aria-label", locale === "en" ? "José technologies" : "Tecnologías de José");
  document.getElementById("nissi-tech").setAttribute("aria-label", locale === "en" ? "NISSI technologies" : "Tecnologías de NISSI");
  document.querySelectorAll(".tech-icons").forEach((list) => {
    const active = list.querySelector(".tech-token.is-active");
    if (active) list.parentElement.querySelector(".tech-readout").textContent = active.dataset.label;
  });
  languageToggle.firstChild.textContent = locale === "en" ? "ES " : "EN ";
  languageToggle.setAttribute("aria-label", locale === "en" ? "Cambiar al español" : "Switch to English");
  try { localStorage.setItem("cv-locale", locale); } catch (_) {}
}

let locale = "es";
try { locale = localStorage.getItem("cv-locale") === "en" ? "en" : "es"; } catch (_) {}
year.textContent = String(new Date().getFullYear());
languageToggle.hidden = false;
applyLanguage(locale);
languageToggle.addEventListener("click", () => {
  locale = locale === "es" ? "en" : "es";
  applyLanguage(locale);
});


document.querySelectorAll(".tech-icons").forEach((list) => {
  const readout = list.parentElement.querySelector(".tech-readout");
  let active = null;
  let pinned = null;
  const show = (token) => {
    if (!token || !list.contains(token)) return;
    if (active && active !== token) active.classList.remove("is-active");
    active = token;
    token.classList.add("is-active");
    readout.textContent = token.dataset.label;
    readout.classList.add("is-selected");
  };
  const clear = () => {
    if (active) active.classList.remove("is-active");
    active = null;
    readout.textContent = locale === "en" ? english.techHint : spanish.get(readout);
    readout.classList.remove("is-selected");
  };
  const restore = () => pinned ? show(pinned) : clear();
  list.addEventListener("pointerover", (event) => show(event.target.closest(".tech-token")));
  list.addEventListener("click", (event) => {
    const token = event.target.closest(".tech-token");
    if (token) { pinned = token; show(token); }
  });
  list.addEventListener("focusin", (event) => show(event.target.closest(".tech-token")));
  list.addEventListener("pointerleave", restore);
  list.addEventListener("focusout", (event) => { if (!list.contains(event.relatedTarget)) restore(); });
});

document.querySelectorAll(".tech-token img").forEach((image) => {
  image.addEventListener("error", () => {
    const token = image.closest(".tech-token");
    if (token) token.classList.add("is-fallback");
    image.remove();
  }, { once: true });
});




const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .strength, .lane-heading, .experience-item, .qa-inner > *, .project-card, .more-work-heading, .work-row, .contact-inner > *"
  );
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-in-view");
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  revealTargets.forEach((element, index) => {
    const isItem = element.matches(".strength, .experience-item, .project-card, .work-row");
    element.style.setProperty("--reveal-shift-x", isItem ? `${index % 2 ? 16 : -16}px` : "0px");
    element.style.setProperty("--reveal-delay", `${index % 3 * 70}ms`);
    element.classList.add("scroll-reveal");
    revealObserver.observe(element);
  });
}

const eyebrowText = document.querySelector('[data-i18n="heroEyebrow"]');
const introText = document.querySelector('[data-i18n="heroIntro"]');
let eyebrowTimer;
let introTimer;

function startHeroTyping() {
  clearTimeout(eyebrowTimer);
  clearTimeout(introTimer);
  if (reducedMotion.matches) return;

  const eyebrowFull = eyebrowText.textContent;
  const eyebrowAccessible = document.createElement("span");
  eyebrowAccessible.className = "sr-only";
  eyebrowAccessible.textContent = eyebrowFull;
  const eyebrowVisible = document.createElement("span");
  eyebrowVisible.className = "eyebrow-typed is-writing";
  eyebrowVisible.setAttribute("aria-hidden", "true");
  eyebrowText.replaceChildren(eyebrowAccessible, eyebrowVisible);

  const words = locale === "en"
    ? ["PEOPLE", "PROCESSES", "TECHNOLOGY"]
    : ["PERSONAS", "PROCESOS", "TECNOLOGÍA"];
  let wordIndex = 0;
  let count = 0;
  let erasing = false;
  const typeWord = () => {
    const letters = Array.from(words[wordIndex]);
    count += erasing ? -1 : 1;
    eyebrowVisible.textContent = letters.slice(0, count).join("");
    let delay = erasing ? 52 : 95;
    if (count === letters.length && !erasing) {
      erasing = true;
      delay = 1050;
    } else if (count === 0 && erasing) {
      erasing = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 320;
    }
    eyebrowTimer = setTimeout(typeWord, delay);
  };
  eyebrowTimer = setTimeout(typeWord, 330);

  const fullIntro = introText.textContent;
  const introMeasure = document.createElement("span");
  introMeasure.className = "intro-measure";
  introMeasure.setAttribute("aria-hidden", "true");
  introMeasure.textContent = fullIntro;
  const introAccessible = document.createElement("span");
  introAccessible.className = "sr-only";
  introAccessible.textContent = fullIntro;
  const introVisible = document.createElement("span");
  introVisible.className = "intro-typed is-writing";
  introVisible.setAttribute("aria-hidden", "true");
  introText.replaceChildren(introMeasure, introAccessible, introVisible);

  const letters = Array.from(fullIntro);
  let introCount = 0;
  const typeIntro = () => {
    introVisible.textContent = letters.slice(0, ++introCount).join("");
    if (introCount < letters.length) {
      introTimer = setTimeout(typeIntro, 19);
    }
  };
  introTimer = setTimeout(typeIntro, 520);
}

let heroTypingObserver;
function startHeroTypingWhenVisible() {
  if (heroTypingObserver) heroTypingObserver.disconnect();
  clearTimeout(eyebrowTimer);
  clearTimeout(introTimer);
  if (reducedMotion.matches) return;

  const hero = document.getElementById("top");
  const bounds = hero.getBoundingClientRect();
  if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
    startHeroTyping();
  } else if ("IntersectionObserver" in window) {
    heroTypingObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        heroTypingObserver.disconnect();
        startHeroTyping();
      }
    }, { threshold: 0.12 });
    heroTypingObserver.observe(hero);
  } else {
    startHeroTyping();
  }
}

const beginHeroTyping = () => setTimeout(startHeroTypingWhenVisible, 350);
if (document.readyState === "complete") {
  beginHeroTyping();
} else {
  window.addEventListener("load", beginHeroTyping, { once: true });
}
languageToggle.addEventListener("click", startHeroTypingWhenVisible);
if (reducedMotion.addEventListener) {
  reducedMotion.addEventListener("change", () => {
    applyLanguage(locale);
    startHeroTypingWhenVisible();
    startContactTypingWhenVisible();
  });
}
const contactTitle = document.querySelector('[data-i18n="contactTitle"]');
const contactDescription = document.querySelector('[data-i18n="contactText"]');
let contactTypingObserver;
let contactTitleTimer;
let contactBodyTimer;
let contactRun = 0;

function prepareContactLine(element) {
  const fullText = element.textContent;
  const measure = document.createElement("span");
  measure.className = "contact-measure";
  measure.setAttribute("aria-hidden", "true");
  measure.textContent = fullText;
  const accessible = document.createElement("span");
  accessible.className = "sr-only";
  accessible.textContent = fullText;
  const visible = document.createElement("span");
  visible.className = "contact-typed is-writing";
  visible.setAttribute("aria-hidden", "true");
  element.replaceChildren(measure, accessible, visible);
  return { letters: Array.from(fullText), visible };
}

function startContactTyping() {
  const run = ++contactRun;
  clearTimeout(contactTitleTimer);
  clearTimeout(contactBodyTimer);
  if (reducedMotion.matches) return;

  const heading = prepareContactLine(contactTitle);
  const body = prepareContactLine(contactDescription);
  let headingCount = 0;
  let bodyCount = 0;

  const typeBody = () => {
    if (run !== contactRun) return;
    body.visible.textContent = body.letters.slice(0, ++bodyCount).join("");
    if (bodyCount < body.letters.length) {
      contactBodyTimer = setTimeout(typeBody, 18);
    }
  };
  const typeHeading = () => {
    if (run !== contactRun) return;
    heading.visible.textContent = heading.letters.slice(0, ++headingCount).join("");
    if (headingCount < heading.letters.length) {
      contactTitleTimer = setTimeout(typeHeading, 82);
    } else {
      heading.visible.classList.remove("is-writing");
      contactBodyTimer = setTimeout(typeBody, 330);
    }
  };
  contactTitleTimer = setTimeout(typeHeading, 240);
}

function startContactTypingWhenVisible() {
  ++contactRun;
  clearTimeout(contactTitleTimer);
  clearTimeout(contactBodyTimer);
  if (contactTypingObserver) contactTypingObserver.disconnect();
  if (reducedMotion.matches) return;

  const contact = document.getElementById("contacto");
  const bounds = contact.getBoundingClientRect();
  if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
    startContactTyping();
  } else if ("IntersectionObserver" in window) {
    contactTypingObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        contactTypingObserver.disconnect();
        startContactTyping();
      }
    }, { threshold: 0.16 });
    contactTypingObserver.observe(contact);
  } else {
    startContactTyping();
  }
}

const beginContactTyping = () => setTimeout(startContactTypingWhenVisible, 350);
if (document.readyState === "complete") {
  beginContactTyping();
} else {
  window.addEventListener("load", beginContactTyping, { once: true });
}
languageToggle.addEventListener("click", startContactTypingWhenVisible);

const navigationLinks = [...document.querySelectorAll(".site-nav a")];
const navigationSections = navigationLinks.map((link) => document.querySelector(link.getAttribute("href")));
let navigationFrame = 0;

function updateActiveNavigation() {
  navigationFrame = 0;
  const marker = window.scrollY + Math.max(document.querySelector(".site-header").offsetHeight, window.innerHeight * 0.55);
  let active = -1;
  navigationSections.forEach((section, index) => {
    if (section && section.offsetTop <= marker) active = index;
  });
  navigationLinks.forEach((link, index) => {
    if (index === active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function queueActiveNavigation() {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateActiveNavigation);
}

window.addEventListener("scroll", queueActiveNavigation, { passive: true });
window.addEventListener("resize", queueActiveNavigation);
window.addEventListener("hashchange", queueActiveNavigation);
window.addEventListener("load", queueActiveNavigation);
queueActiveNavigation();