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
function createSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const cards = slider.querySelectorAll('.card');
  const prevButton = slider.closest('.slider-container').querySelector('.prev-button');
  const nextButton = slider.closest('.slider-container').querySelector('.next-button');
  const indicatorContainer = slider.closest('.slider-container').querySelector('.slider-indicator');
  let currentIndex = 0;

  // Create indicator dots
  cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorContainer.appendChild(dot);
  });

  const indicatorDots = indicatorContainer.querySelectorAll('.indicator-dot');

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicatorDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Touch swipe functionality
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      nextSlide();
    }
  }

  updateSlider();
}

// Initialize sliders
createSlider('IPA-slider');