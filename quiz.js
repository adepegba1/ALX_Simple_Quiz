function checkAnswer() {
  const feedback = document.getElementById("feedback");
  const correctAnswer = "4";
  const answer = document.querySelector(
    "input[type='radio'][name='quiz']:checked"
  );
  const userAnswer = answer.value;
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
