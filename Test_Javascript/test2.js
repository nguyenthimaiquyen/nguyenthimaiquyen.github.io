const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quizContainer = document.querySelector('.quiz-container');
let html = '';
quizes.forEach(quize => {
    html += `
        <div class="quiz-item">
            <h3>Câu ${quize.id} : ${quize.question}</h3>
            <div class="quiz-answer">
                <div class="quiz-answer-item">
                    <input type="radio" name="${quize.id}">
                    <label>${quize.answers[0]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quize.id}">
                    <label>${quize.answers[1]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quize.id}">
                    <label>${quize.answers[2]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quize.id}">
                    <label>${quize.answers[3]}</label>
                </div>
            </div>
        </div>
    `
});
quizContainer.innerHTML = html;

const btnRandom = document.getElementById('btn');
const quizeItems = document.querySelectorAll('.quiz-item');

btnRandom.addEventListener('click', function() {
    quizeItems.forEach(item => {
        const answers = document.querySelectorAll('.quiz-answer-item label:nth-child(2)');

        const answerValue = [];
        
        for (let i = 0; i < answers.length; i++) {
            let random = Math.floor(Math.random() * (i + 2));
            answerValue.push(random);
        }

        for (let i = 0; i < answers.length; i++) {
            answers[i].innerText = answerValue[i];
        }

        const input = document.querySelectorAll('.quiz-answer-item input:nth-child(1)');

        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = input[randomIndex];            
        randomAnswer.checked = true;
    });

});