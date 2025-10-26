// === Element references ===
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// === Menu toggle ===
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// === Reset animations and active states ===
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    barsBox?.classList.remove('active');
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
        barsBox?.classList.add('active');
    }, 1100);
};

// === Internal navigation handler (for ALL # links) ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return; // Skip if no section found

        e.preventDefault();
        activePage();

        // Highlight nav link if exists
        navLinks.forEach(nav => {
            nav.classList.toggle('active', nav.getAttribute('href') === targetId);
        });

        // Show section with delay to match animation timing
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 1100);
    });
});

// === Logo click navigates home ===
logoLink.addEventListener('click', e => {
    e.preventDefault();
    const homeSection = sections[0];
    activePage();
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[0].classList.add('active');
    setTimeout(() => homeSection.classList.add('active'), 1100);
});

// === Resume section toggle ===
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// === Portfolio carousel ===
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

arrowRight?.addEventListener('click', () => {
    if (index < 4) index++;
    activePortfolio();
});

arrowLeft?.addEventListener('click', () => {
    if (index > 0) index--;
    activePortfolio();
});

