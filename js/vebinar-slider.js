const slider = document.querySelector('.vebinar-slider');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const vebinarSlides = slider.querySelectorAll('.slide');
let slidePosition = 0;
const totalSlides = vebinarSlides.length;

// Ивент на клик кнопки "назад"
prevBtn.addEventListener('click', () => {
    slidePosition--;
    if (slidePosition < 0) {
        slidePosition = totalSlides - 1;
    }
    updateSliderPosition();
    });

// Ивент на клик кнопки "вперёд"
nextBtn.addEventListener('click', () => {
    slidePosition++;
    if (slidePosition > totalSlides - 1) {
        slidePosition = 0;
    }
    updateSliderPosition();
});

//Задаём слайдам анимацию transform в зависимости от размера экрана устройства
function updateSliderPosition() {
    slider.style.transform = `translateX(-${slidePosition * vebinarSlides[0].clientWidth}px)`;
}