//Создаём переменные с массивом слайдов и активным слайдом
const slides = document.querySelectorAll('.slider-img');
const activeSlide = document.querySelector('.slider-img.current');

// Функция для смены класса у активного слайда и передвачи его следующему
function changeSlide() {
    const activeSlide = document.querySelector('.slider-img.current');
    let nextSlide = activeSlide.nextElementSibling;
    
    // Если следующего слайда нету - возвращаемся к первому
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    activeSlide.classList.remove('current');
    nextSlide.classList.add('current');
}

// Зацикливаем функцию с интервалом в 3 сек
setInterval(changeSlide, 4000);