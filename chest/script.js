let x = document.querySelector('h1')

// Генерируем случайный сундук с сокровищами при загрузке страницы

let treasureChest = Math.floor(Math.random() * 3) + 1;

x.innerHTML = `Сунду${treasureChest}и с сокровищами`

function openChest(chestNumber) {
    const resultDiv = document.getElementById('result');
    const chestImg = document.getElementById(`chest${chestNumber}`).querySelector('img');

    if (chestNumber === treasureChest) {
        resultDiv.innerHTML = '<p style="color: #ff69b4; font-size: 18px;">🎉 Поздравляем! Вы нашли сокровища!</p>';
        resultDiv.style.backgroundColor = '#ffe6ff';
        resultDiv.style.borderLeft = '5px solid #ff69b4';
        chestImg.src = '2.png'; // Изображение сундука с сокровищами
    } else {
        resultDiv.innerHTML = `<p style="color: #8b4589; font-size: 18px;">❌ Сокровищ нет в этом сундуке. Попробуйте другой!</p>`;
        resultDiv.style.backgroundColor = '#fff0ff';
        resultDiv.style.borderLeft = '5px solid #8b4589';
        chestImg.src = '3.png'; // Изображение пустого сундука
    }

    // Анимация результата
    resultDiv.style.animation = 'pulse 1s ease-in-out';
    setTimeout(() => {
        resultDiv.style.animation = '';
    }, 1000);
}
function resetGame() {
    treasureChest = Math.floor(Math.random() * 3) + 1;
    x.innerHTML = `Сунду${treasureChest}и с сокровищами`
    document.getElementById('result').innerHTML = '';
    document.querySelectorAll('.chest img').forEach(img => {
        img.src = '1.png';
    });
}
