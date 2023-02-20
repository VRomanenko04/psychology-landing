const slides = document.querySelectorAll('.slider-img');
const activeSlide = document.querySelector('.slider-img.active');


function changeSlide() {
    let nextSlide = activeSlide.nextElementSibling;
    
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

setInterval(changeSlide, 3000);