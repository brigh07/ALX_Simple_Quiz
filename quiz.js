const submitButton = document.getElementById('submit-answer');

function checkAnswer() {
  const correctAnswer = '4';
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  
  if (userAnswer === null) {
    document.getElementById('feedback').textContent = 'Please select an answer.';
    return;
  }

  let userSelected = userAnswer.value;
  if (userSelected === correctAnswer) {
    document.getElementById('feedback').textContent = 'Correct!';
    document.getElementById('feedback').style.color = 'green';
  } else {
    document.getElementById('feedback').textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
    document.getElementById('feedback').style.color = 'red';
  }
}
