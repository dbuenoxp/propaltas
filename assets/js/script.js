
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

const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
let autoplayInterval;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
const cards = document.querySelectorAll('.carousel-card');
let visibleCards = getVisibleCards();

// Detectar cuántos cards se ven por pantalla
function getVisibleCards() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
}

// Actualizar posición
function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Botones
nextBtn.addEventListener('click', () => {
  index = (index + 1) % (cards.length - visibleCards + 1);
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + (cards.length - visibleCards + 1)) % (cards.length - visibleCards + 1);
  updateCarousel();
});

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    index = (index + 1) % (cards.length - visibleCards + 1);
    updateCarousel();
  }, 2000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();

// Pausar autoplay al pasar el mouse
track.addEventListener('mouseenter', stopAutoplay);
track.addEventListener('mouseleave', startAutoplay);

// 🖱️ Drag con el mouse (Desktop)
track.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  track.classList.add('grabbing');
  prevTranslate = getTranslateX();
});

track.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const deltaX = e.pageX - startX;
  const threshold = cards[0].offsetWidth / 4;

  if (deltaX < -threshold && index < cards.length - visibleCards) {
    index++;
  } else if (deltaX > threshold && index > 0) {
    index--;
  }
  updateCarousel();
  track.classList.remove('grabbing');
});

track.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    updateCarousel();
    track.classList.remove('grabbing');
  }
});

// 📱 Touch events para móvil
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  prevTranslate = getTranslateX();
}, { passive: true });

track.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
  const threshold = cards[0].offsetWidth / 4;

  if (deltaX < -threshold && index < cards.length - visibleCards) {
    index++;
  } else if (deltaX > threshold && index > 0) {
    index--;
  }
  updateCarousel();
});

track.addEventListener('touchmove', (e) => {
  // Puedes dejarlo vacío si no haces animación en tiempo real
}, { passive: true });

// Obtener posición actual del carrusel
function getTranslateX() {
  const style = window.getComputedStyle(track);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

// Resize actualiza todo
window.addEventListener('resize', () => {
  visibleCards = getVisibleCards();
  index = 0;
  updateCarousel();
});
