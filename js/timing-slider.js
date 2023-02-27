//Создаём переменные с массивом слайдов и активным слайдом
const slides = document.querySelectorAll('.slider-img');
const activeSlide = document.querySelector('.slider-img.active');

// Функция для смены класса у активного слайда и передвачи его следующему
function changeSlide() {
    const activeSlide = document.querySelector('.slider-img.active');
    let nextSlide = activeSlide.nextElementSibling;
    
    // Если следующего слайда нету - возвращаемся к первому
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

// Зацикливаем функцию с интервалом в 3 сек
setInterval(changeSlide, 3000);