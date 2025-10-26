// Detect which page we're on
const path = window.location.pathname;
const isHomePage = path === '/' || path.endsWith('index.html');
const isResumePage = path.includes('resume') || path.endsWith('resume.html');
const isProjectsPage = path.includes('projects') || path.endsWith('projects.html');

// For non-home pages, show content immediately
if (!isHomePage) {
    document.querySelector('header')?.classList.add('active');
    document.querySelector('.bars-box')?.classList.add('active');
    document.querySelector('section')?.classList.add('active');
}

// === Element references ===
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// === Menu toggle ===
menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// === Reset animations and active states (home only) ===
const activePage = () => {
    if (!isHomePage) return;
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

// === Internal navigation handler (home only) ===
if (isHomePage) {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            e.preventDefault();
            activePage();

            navLinks.forEach(nav => {
                nav.classList.toggle('active', nav.getAttribute('href') === targetId);
            });

            setTimeout(() => {
                targetSection.classList.add('active');
            }, 1100);
        });
    });

    // === Logo click navigates home ===
    logoLink?.addEventListener('click', e => {
        e.preventDefault();
        const homeSection = sections[0];
        activePage();
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[0].classList.add('active');
        setTimeout(() => homeSection.classList.add('active'), 1100);
    });
}

// === Resume section toggle (resume page only) ===
if (isResumePage) {
    const resumeBtns = document.querySelectorAll('.resume-btn');
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const resumeDetails = document.querySelectorAll('.resume-detail');
            resumeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            resumeDetails.forEach(d => d.classList.remove('active'));
            resumeDetails[idx].classList.add('active');
        });
    });
}

// === Portfolio carousel (projects page only) ===
if (isProjectsPage) {
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
    let index = 0;

    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        portfolioDetails.forEach(detail => detail.classList.remove('active'));
        if (portfolioDetails[index]) portfolioDetails[index].classList.add('active');
    };

    arrowRight?.addEventListener('click', () => {
        if (index < 4) index++;
        activePortfolio();
    });

    arrowLeft?.addEventListener('click', () => {
        if (index > 0) index--;
        activePortfolio();
    });
}
