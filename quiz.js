document.getElementById("submit-answer").addEventListener("click", function () {
    const choices = document.getElementsByName("quiz");
    let selected = null;
    for (const choice of choices) {
        if (choice.checked) {
            selected = choice.value;
            break;
        }
    }

    const feedback = document.getElementById("feedback");
    if (selected === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    } else if (selected === "4") {
      feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";
    }
});
