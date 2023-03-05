const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
// Получаем классы фиксированных объектов
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

//Время связанное с длинной анимации в css
const timeout = 600;

// Если массив popupLinks не пустой, то выполняем переборку 
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];

        // Задаём ивент по клику на конкретный popup по индексу, убираем в нём '#', 
        // находим его по id и открываем через функцию, убирая стандарную программу
        popupLink.addEventListener('click', function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelector('.close-popup');

popupCloseIcon.addEventListener('click', function (e) {
popupClose(popupCloseIcon.closest('.popup'));
e.preventDefault();
});

function popupOpen(currentPopup) {
    // Проверка наличия объетка и открыт ли onlock
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        // Закрываем уже отрытый popup если такой есть
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        // Добавляем нашему popup класс open
        currentPopup.classList.add('open');
        // По клику если нету контента в popup контента, то закрываем popup, 
        // то есть закрывает popup при клике по тёмной области
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
// Функция закрывает popup и разблокирет body если оно заблокировано
function popupClose(popupActive, doUnlock = true) {
    if(unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    // Проверяем есть ли фиксированные объекты, если да не даём им смещаться
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    // Блокирем body
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    // Забираем возможность закрыть popup во время анимации появления
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        // Фиксированным объектам убираем padding-right
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    // Онлочим body после конца анимации
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


(function() {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function() {
    // проверяем поддержку
    if (!Element.prototype.matches) {
      // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();