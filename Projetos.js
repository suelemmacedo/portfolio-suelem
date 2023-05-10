const buttonProjetos = document.getElementById('button');
buttonProjetos.addEventListener('click', function(){
  window.location.href = "Contatos.html";
});

// CARROSSEL //

const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.anterior');
const nextBtn = carousel.querySelector('.próximo');

let slideWidth = items[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  container.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex < items.length - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(items.length - 1);
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);