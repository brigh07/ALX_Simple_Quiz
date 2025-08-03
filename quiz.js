function checkAnswer() {
  const correctAnswer = '4';
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById('feedback');

  if (selectedAnswer === correctAnswer) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
    feedback.style.color = 'red';
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
