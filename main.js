//made by chatgpt since Ziolexy is bad Java script

// Off-canvas navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scrolling animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = (element) => {
  const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  const elementHeight = element.offsetHeight;
  const scrollTop = document.documentElement.scrollTop;

  const threshold = scrollTop + window.innerHeight - elementHeight / 2;

  if (distanceToTop <= threshold) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
};

const handleScroll = () => {
  fadeElements.forEach((element) => {
    fadeIn(element);
  });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Parallax effect for hero image
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Change header background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});