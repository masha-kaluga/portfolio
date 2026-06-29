const questions = [
    {
        question: "Что такое HTML?",
        options: [
            "Язык программирования для создания мобильных приложений.",
            "Язык разметки гипертекста для создания веб‑страниц.",
            "Графический редактор для дизайна сайтов.",
            "База данных для хранения веб‑контента."
        ],
        correct: 1
    },
    {
        question: "Какой тег используется для создания заголовка первого уровня?",
        options: ["<h0>", "<head>", "<h1>", "<title>"],
        correct: 2
    },
    {
        question: "Какой тег создаёт абзац текста?",
        options: ["<a>", "<p>", "<span>", "<div>"],
        correct: 1
    },
    {
        question: "Какой тег вставляет изображение на страницу?",
        options: ["<img>", "<picture>", "<image>", "<photo>"],
        correct: 0
    },
    {
        question: "Какой атрибут обязателен для тега <img>, чтобы изображение отобразилось?",
        options: ["alt", "class", "width", "src"],
        correct: 3
    },
    {
        question: "Какой тег обозначает начало и конец HTML‑документа?",
        options: ["<body>...</body>", "<head>...</head>", "<html>...</html>", "<page>...</page>"],
        correct: 2
    },
    {
        question: "Какой тег содержит метаинформацию о странице (например, заголовок, кодировку)?",
        options: ["<meta>", "<body>", "<info>", "<head>"],
        correct: 3
    },
    {
        question: "Какой тег задаёт заголовок страницы, который отображается во вкладке браузера?",
        options: ["<title>", "<h1>", "<header>", "<name>"],
        correct: 0
    },
    {
        question: "Какой тег создаёт нумерованный список?",
        options: ["<ul>", "<dl>", "<ol>", "<li>"],
        correct: 2
    },
    {
        question: "Какой тег создаёт маркированный список?",
        options: ["<ol>", "<ul>", "<list>", "<menu>"],
        correct: 1
    },
    {
        question: "Какой тег добавляет перенос строки без создания нового абзаца?",
        options: ["<nl>", "<line>", "<p><", "br>"],
        correct: 3
    },
    {
        question: "Какой тег определяет секцию «подвал» страницы?",
        options: ["<bottom>", "<end>", "<footer>", "<section>"],
        correct: 2
    },
    {
        question: "Что означает аббревиатура <!DOCTYPE html> в начале HTML‑документа?",
    options: [
        "Объявление типа документа — сообщает браузеру, что это HTML5‑документ",
        "Указание кодировки страницы",
        "Заголовок документа",
        "Команда для загрузки стилей"
    ],
    correct: 0
    
    },
    {
    question: "Как правильно указать язык документа в HTML?",
    options: ["<lang=\"ru\">", "<html lang=\"ru\">", "<language=\"ru\">", "<doc lang=\"ru\">"],
    correct: 1
    },
    {
        question: "Какой тег используется для встраивания аудио в HTML?",
        options: ["<embed>", "<sound>", "<media>", "<audio>"],
        correct: 3
    }
];


let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedback = document.getElementById('feedback');

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    feedback.innerHTML = '';

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.dataset.index = index;
        btn.addEventListener('click', function() {
            document.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');
        });
        optionsContainer.appendChild(btn);
    });

    checkBtn.style.display = 'block';
    nextBtn.style.display = 'none';
}

document.getElementById('check-btn').addEventListener('click', function() {
    const selectedButtons = document.querySelectorAll('.option-btn.selected');
    if (selectedButtons.length === 0) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }

    const selectedIndex = parseInt(selectedButtons[0].dataset.index);
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (selectedIndex === currentQuestion.correct) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Правильно!';
        score++;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Неправильно. Правильный ответ: ${currentQuestion.options[currentQuestion.correct]}`;
    }

    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
});

document.getElementById('next-btn').addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('test-area').style.display = 'none';
        document.getElementById('result').innerHTML = `Тест завершён! Вы ответили правильно на ${score} из ${questions.length} вопросов.`;
    }
});

displayQuestion();

