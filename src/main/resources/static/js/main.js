// ── IntersectionObserver: reveal on scroll ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Nav: glass effect on scroll ──
const nav = document.getElementById('nav');
const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.classList.toggle('active', isOpen);
});

navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
            const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
