// slider.js — versión compatible y robusta
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelector('.slides');
  const cards = document.querySelectorAll('.card');
  const slider = document.querySelector('.slider');
  const indicatorsContainer = document.querySelector('.indicators');

  if (!slides || !slider || !cards || cards.length === 0) {
    console.warn('Slider: faltan elementos .slides, .slider o .card en el HTML.');
    return;
  }

  const visibleCards = 3;
  const totalCards = cards.length;
  let index = 0;
  let autoSlide = null;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  // Si no hay más tarjetas que las visibles, no animar
  if (totalCards <= visibleCards) {
    // opcional: ocultar indicadores si existen
    if (indicatorsContainer) indicatorsContainer.style.display = 'none';
    return;
  }

  // Crear indicadores dinámicos (si existe el contenedor)
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      // closure para que i se capture correctamente
      (function (idx, element) {
        element.addEventListener('click', function () {
          showSlide(idx);
          resetAutoSlide();
        });
      })(i, dot);
      indicatorsContainer.appendChild(dot);
    }
  }

  const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll('.dot') : [];

  function showSlide(i) {
    if (i < 0) i = maxIndex;
    if (i > maxIndex) i = 0;
    index = i;
    const percent = index * (100 / visibleCards);
    slides.style.transform = 'translateX(-' + percent + '%)';

    // actualizar indicadores
    if (dots && dots.length) {
      dots.forEach(d => d.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(function () {
      showSlide(index + 1);
    }, 3000);
  }

  function stopAutoSlide() {
    if (autoSlide !== null) {
      clearInterval(autoSlide);
      autoSlide = null;
    }
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Pausar/Reanudar al entrar/salir del slider
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  // Hover en tarjetas: añadimos/quitan clase .card-hover
  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      card.classList.add('card-hover');
      // opcional: pausar si quieres que no avance mientras hover en tarjeta
      stopAutoSlide();
    });
    card.addEventListener('mouseleave', function () {
      card.classList.remove('card-hover');
      startAutoSlide();
    });
  });

  // Iniciar
  showSlide(0);
  startAutoSlide();
});
