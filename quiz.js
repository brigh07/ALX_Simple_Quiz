const quizQuestion = document.getElementById('quiz-question');
const submitButton = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');

const questions = [
  {
    question: 'What is 2 + 2?',
    choices: ['4', '22', '3'],
    correctAnswer: '4'
  }
  // Add more questions here...
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  quizQuestion.textContent = currentQuestion.question;

  const choices = document.querySelectorAll('input[type="radio"]');
  const labels = document.querySelectorAll('label');

  for (let i = 0; i < choices.length; i++) {
    choices[i].value = currentQuestion.choices[i];
    labels[i].textContent = currentQuestion.choices[i];
  }
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked').value;

  if (selectedAnswer === currentQuestion.correctAnswer) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`;
    feedback.style.color = 'red';
  }
}

submitButton.addEventListener('click', function() {
  checkAnswer();
});

loadQuestion();

