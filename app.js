const questions = [
    
        {question: 'What is an acceptable salary?', options: ['100K','75K', '125K','500K'], correctAnswer: '100K' },
        {question: 'Where would you want to live in?', options: ['Chicago', 'Seattle', 'New York', 'Sillicon Valley'], correctAnswer: 'New York' },
        {question: 'Will you find love?', options: ['Mayhaps', 'He already has', "Can't tell", 'Who knows'], correctAnswer: 'Mayhaps'},
        {question: 'Will love be victorious?', options: ['Of course', 'Sure', 'It must be', 'I just want to love and be loved'], correctAnswer: 'I just want to love and be loved' }
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    // Create a dropdown/select element
    const selectElement = document.createElement("select");
    selectElement.name = "answer";

    // Add options to the dropdown
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    }

    // Append the dropdown to the question container
    questionContainer.appendChild(selectElement);
}

function checkAnswer() {
    const selectedOption = document.querySelector('select[name="answer"]');
    
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        const yesOrNo = document.getElementById("yesOrNo");

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            yesOrNo.innerHTML= "Correct! 🎉";
        } else {
            yesOrNo.innerHTML = `Incorrect. The correct answer is ${correctAnswer}.`;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            console.log("Quiz completed!");
            currentQuestionIndex = 0;
            loadQuestion();
        }
    } else {
        console.log("Please select an answer.");
    }
}

nextButton.addEventListener("click", checkAnswer);

loadQuestion();
