//Активация анимации текста на первой странице
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenText = document.querySelectorAll('.showing-text');
hiddenText.forEach((el) => observer.observe(el));


//Активация анимации текста на второй странице
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-text');
        } else {
            entry.target.classList.remove('show-text');
        }
    });
});

const hiddenText2 = document.querySelectorAll('.about-item');
hiddenText2.forEach((el) => observer2.observe(el));