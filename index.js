document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const user_id = params.get('user_id');

    if (user_id) {
        localStorage.setItem('user_id', user_id);
    }

    const animateButton = document.getElementById('animateButton');
    const counterValue = document.getElementById('counterValue');
    let counter = localStorage.getItem('counter') || 0;

    // Вывод значения из localStorage
    counterValue.textContent = `Текущее значение: ${counter}`;

    animateButton.addEventListener('click', function () {
        counter++;
        localStorage.setItem('counter', counter);
        counterValue.textContent = `Текущее значение: ${counter}`;
    });

    // Добавление обработчика для кнопки "Передать user_id"
    const sendUserIdButton = document.getElementById('sendUserIdButton');
    sendUserIdButton.addEventListener('click', function () {
        const user_id = localStorage.getItem('user_id');
        counterValue.textContent += ` | User ID: ${user_id}`;
    });
});
