// Ищем все ссылки через id  в проекте
const anchors = document.querySelectorAll('a[href*="#"]');

// Для кадой ссылки добавляем ивент по клику
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        // Убираем стандарное значение
        event.preventDefault();
        
        //Добавляем плавное перемещение до блока с указанным id
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}