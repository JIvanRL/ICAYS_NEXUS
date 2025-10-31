// Carrusel circular tipo Spotify
// Requiere estructura HTML con .circular-carousel, .circular-carousel-track y .circular-carousel-slide

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.circular-carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.circular-carousel-btn.prev');
  const nextBtn = document.querySelector('.circular-carousel-btn.next');
  let current = 0;
  let autoInterval = null;

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'left', 'right');
      if (i === current) {
        slide.classList.add('active');
      } else if (i === (current - 1 + slides.length) % slides.length) {
        slide.classList.add('left');
      } else if (i === (current + 1) % slides.length) {
        slide.classList.add('right');
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAuto();
  });
  nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAuto();
  });
  // Iniciar el carrusel automático
  function startAuto() {
    autoInterval = setInterval(nextSlide, 4000);
  }
  function restartAuto() {
    clearInterval(autoInterval);
    startAuto();
  }

  updateSlides();
  startAuto();
});
