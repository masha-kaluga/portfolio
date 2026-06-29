
document.addEventListener('DOMContentLoaded', () => {
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    const userAnswerInput = document.getElementById('userAnswer');
    const checkBtn = document.getElementById('checkBtn');
    const newExampleBtn = document.getElementById('hewExampleBtn'); // в HTML опечатка: должно быть newExampleBtn, но используем как есть
    const correctCountEl = document.getElementById('correctCount');
    const totalCountEl = document.getElementById('totalCount');
    const resultEl = document.getElementById('result');

    let correctCount = 0;
    let totalCount = 0;
    let currentNum1 = 0;
    let currentNum2 = 0;

    // Генерация нового примера
    function generateExample() {
        // умножение в пределах 1–12 (как таблица умножения), можно поменять диапазон
        currentNum1 = Math.floor(Math.random() * 12) + 1;
        currentNum2 = Math.floor(Math.random() * 12) + 1;

        num1El.textContent = currentNum1;
        num2El.textContent = currentNum2;
        userAnswerInput.value = '';
        userAnswerInput.disabled = false;
        userAnswerInput.focus();
        resultEl.textContent = '';
        checkBtn.style.display = 'inline-block';
        newExampleBtn.classList.add('hidden');
    }

    // Проверка ответа
    checkBtn.addEventListener('click', () => {
        const userInput = userAnswerInput.value.trim();
        if (userInput === '') {
            resultEl.textContent = 'Введите ответ!';
            resultEl.style.color = 'orange';
            return;
        }

        const userAnswer = Number(userInput);
        const correctAnswer = currentNum1 * currentNum2;
        totalCount++;

        if (userAnswer === correctAnswer) {
            correctCount++;
            resultEl.textContent = 'Правильно! 🎉';
            resultEl.style.color = 'green';
        } else {
            resultEl.textContent = `Неверно. Правильный ответ: ${correctAnswer}`;
            resultEl.style.color = 'red';
        }

        correctCountEl.textContent = correctCount;
        totalCountEl.textContent = totalCount;

        userAnswerInput.disabled = true;
        checkBtn.style.display = 'none';
        newExampleBtn.classList.remove('hidden');
    });

    // Кнопка «Новый пример»
    newExampleBtn.addEventListener('click', generateExample);

    // Запуск первого примера при загрузке
    generateExample();
});