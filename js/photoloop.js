let firstImg = document.querySelector('.first-certificate');
let secImg = document.querySelector('.second-certificate');
let thirdImg = document.querySelector('.third-certificate');

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

setInterval(() => {
    photosAnimation();
}, 3000);