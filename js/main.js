// Navbar scroll state
const navbar = document.getElementById('navbar');
function onScroll() { navbar.classList.toggle('scrolled', window.scrollY > 30); }
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
if (mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// FAQ accordion
function toggleFaq(el) {
    const answer = el.nextElementSibling;
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) { el.classList.add('open'); answer.classList.add('open'); }
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
