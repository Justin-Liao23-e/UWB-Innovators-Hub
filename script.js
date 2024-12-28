// ======= DOMContentLoaded / Page Load =======
document.addEventListener('DOMContentLoaded', () => {
    // 1. CREATE THE AUDIO ELEMENT PROGRAMMATICALLY
    const bgMusic = new Audio("motivation.m4a"); // Replace with your actual MP3 path
    bgMusic.loop = true;
  
    // 2. MUTE BUTTON LOGIC
    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
  
    // Check localStorage for saved mute state
    const isMuted = localStorage.getItem('bgMusicMuted') === 'true';
    bgMusic.muted = isMuted;
  
    // Set initial icon based on mute state
    if (isMuted) {
      muteIcon.classList.remove('fa-volume-high');
      muteIcon.classList.add('fa-volume-xmark');
    } else {
      muteIcon.classList.remove('fa-volume-xmark');
      muteIcon.classList.add('fa-volume-high');
      // Try to play audio
      bgMusic.play().catch((err) => console.warn("Autoplay blocked:", err));
    }
  
    // Mute/unmute functionality
    muteBtn.addEventListener('click', () => {
      if (bgMusic.muted) {
        bgMusic.muted = false;
        muteIcon.classList.remove('fa-volume-xmark');
        muteIcon.classList.add('fa-volume-high');
        bgMusic.play().catch((err) => console.warn("Can't play audio:", err));
        localStorage.setItem('bgMusicMuted', 'false'); // Save state
      } else {
        bgMusic.muted = true;
        muteIcon.classList.remove('fa-volume-high');
        muteIcon.classList.add('fa-volume-xmark');
        localStorage.setItem('bgMusicMuted', 'true'); // Save state
      }
    });
  
    // Play the audio when the page loads
    if (!isMuted) {
      bgMusic.play().catch((err) => console.warn("Autoplay blocked:", err));
    }
  });
  
  // ======= HAMBURGER MENU (Mobile) =======
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });
  
  // ======= CAROUSEL/SLIDER FOR PAST EVENTS =======
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