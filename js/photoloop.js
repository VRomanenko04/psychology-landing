let firstImg = document.querySelector('.first-certificate');
let secImg = document.querySelector('.second-certificate');
let thirdImg = document.querySelector('.third-certificate');

// Функция после запуска по очереди добавляет в стек изменение стилей у кратинок
function photosAnimation() {
    setTimeout(() => {
        firstImg.classList.toggle('act');
    }, 1000);
    setTimeout(() => {
        thirdImg.classList.toggle('act');
    }, 2000);
    setTimeout(() => {
        secImg.classList.toggle('act');
    }, 3000);
};

// Запскает функцию каждые 3 секудны если стек свободен
setInterval(() => {
    photosAnimation();
}, 3000);
