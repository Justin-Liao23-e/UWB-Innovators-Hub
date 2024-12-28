// ======= Hamburger Menu (Mobile) =======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

// ======= Carousel/Slider for Past Events =======
const carouselSlide = document.getElementById('carouselSlide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0; // Current slide index
const images = carouselSlide.querySelectorAll('img'); // All images in the carousel

// Determine width of each image
let size = images[0].clientWidth;

// Recalculate size on window resize
window.addEventListener('resize', () => {
  size = images[0].clientWidth;
  updateCarousel();
});

// Move to the current image
function updateCarousel() {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) {
    counter = 0; // Wrap to first
  } else {
    counter++;
  }
  updateCarousel();
});

// Prev Button
prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = images.length - 1; // Wrap to last
  } else {
    counter--;
  }
  updateCarousel();
});

// ======= Mute/Unmute Music =======
const bgMusic = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');

// Ensure music starts unmuted by default
bgMusic.muted = false;

// When user clicks the mute button
muteBtn.addEventListener('click', () => {
  if (bgMusic.muted) {
    // Unmute
    bgMusic.muted = false;
    muteIcon.classList.remove('fa-volume-xmark');
    muteIcon.classList.add('fa-volume-high');
  } else {
    // Mute
    bgMusic.muted = true;
    muteIcon.classList.remove('fa-volume-high');
    muteIcon.classList.add('fa-volume-xmark');
  }
});