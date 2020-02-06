//Здесь прописываю логику работы кнопок на странице для блока Фильтры
let filtersButton = document.querySelector('.filtersVisibleButton'), //получаем кнопку "Выбрать фильтры"
    filtersForm = document.querySelector('#filtersForm'); //получаем form

//при нажатии на кнопку "Выбрать фильтры" показываем форму со всеми фильтрами
filtersButton.addEventListener('click', function () {
    filtersForm.style.display = 'block';
});

//при нажатии на "Применить все фильтры" - форма отправляется
filtersForm.addEventListener('submit', function (event) {
    event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)
    console.log('форма отправилась, когда нажали "Применить все фильтры"'); //для проверки
});