//Активация анимации текста на странице "обо мне", сделан через патерн наблюдателя
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        // Если объект в поле зрения пользователя - добавляем класс, иначе убираем
        if (entry.isIntersecting) {
            entry.target.classList.add('show-text');
        } else {
            entry.target.classList.remove('show-text');
        }
    });
});

const hiddenText = document.querySelectorAll('.about-item');
// Добавляем анимацию для каждого элемента из массива hiddenText
hiddenText.forEach((el) => observer.observe(el));