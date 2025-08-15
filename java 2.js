// === SLIDER ===
const slides = document.querySelector('.slides');
const totalCards = document.querySelectorAll('.card').length;
const indicators = document.querySelector('.indicators');

let index = 0;
const cardsPerView = 3; // mostramos 3 por paso
const totalSteps = Math.ceil(totalCards / cardsPerView);

// Crear indicadores dinámicamente
for (let i = 0; i < totalSteps; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  indicators.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  index = (index > 0) ? index - 1 : totalSteps - 1;
  showSlide(index);
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index < totalSteps - 1) ? index + 1 : 0;
  showSlide(index);
});
