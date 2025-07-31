
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  let cards = document.querySelectorAll('.carousel-card');
  if (cards.length === 0) return;

  let index = 1;
  let cardWidth = cards[0].offsetWidth || 300;
  let autoplayInterval;
  let isTransitioning = false;

  // Clonar extremos
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);
  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';
  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  cards = document.querySelectorAll('.carousel-card');

  const updateWidth = () => {
    cardWidth = cards[0].offsetWidth || 300;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  };

  const updateCarousel = () => {
    if (isTransitioning) return;
    isTransitioning = true;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  };

  track.addEventListener('transitionend', () => {
    const currentCard = cards[index];
    if (currentCard.id === 'first-clone') {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${cardWidth * index}px)`;
    } else if (currentCard.id === 'last-clone') {
      track.style.transition = 'none';
      index = cards.length - 2;
      track.style.transform = `translateX(-${cardWidth * index}px)`;
    }
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
    }, 20);
    isTransitioning = false;
  });

  const startAutoplay = () => {
    if (autoplayInterval) return;
    autoplayInterval = setInterval(() => {
      index++;
      updateCarousel();
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  };

  // Comenzar
  updateWidth();
  startAutoplay();

  window.addEventListener('resize', updateWidth);
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
});


const navbar = document.getElementById('main-header');
const scrollTopBtn = document.getElementById('scrollTopBtn');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

  if (currentScroll > lastScrollY) {
    navbar.classList.add('hide-navbar');
  } else {
    navbar.classList.remove('hide-navbar');
  }

  lastScrollY = currentScroll;
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
