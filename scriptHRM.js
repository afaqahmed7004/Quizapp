const questions = [
    {
        question :"Which of the following correctly defines the Human Resource Department?",
        answers : [
            { text: "Functional department", correct: false},
            { text: "Service department", correct: true},
            { text: "Line department", correct: false},
            { text: "Authority department", correct: false},
        ]
    },
    {
        question :"Which of the following fields requires a skilled HR professional?",
        answers : [
            { text: "People handling", correct: false},
            { text: "Both (a) and (b)", correct: false},
            { text: "Clarifying", correct: true},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question :"Which of the following is considered as strategic activity?",
        answers : [
            { text: "Productivity", correct: false},
            { text: "Placement", correct: false},
            { text: "Planning", correct: false},
            { text: "Recruitment", correct: true},
        ]
    },
    {
        question :"Who laid the foundation of Human Resource Management practices?",
        answers : [
            { text: "David C. McClelland", correct: false},
            { text: " Roethlisberger and Dickinson", correct: false},
            { text: "Peter Drucker and Douglas McGregor", correct: true},
            { text: "Elton Mayo", correct: false},
        ]
    },
    {
        question :"The business side of the process begins with the strategic __________ as one of the guiding frameworks.",
        answers : [
            { text: "Policy", correct: false},
            { text: "Plan", correct: true},
            { text: "HR", correct: false},
            { text: "All of the above", correct: false},
        ]
    },
    {
        question :"What does a job specification include?",
        answers : [
            { text: "Personal characteristics", correct: false},
            { text: "Physical characteristics", correct: false},
            { text: "Psychological characteristics", correct: false},
            { text: "All of the above", correct: true},
        ]
    },
    {
        question :"Developing characteristics of people are needed to run business in __________.",
        answers : [
            { text: "Long term", correct: true},
            { text: "Short term", correct: false},
            { text: "Medium term", correct: false},
            { text: "All of the above", correct: false},
        ]
    },
    {
        question :"Which of the following takes a full interest in the process of strategic planning?",
        answers : [
            { text: "Training & Development", correct: true},
            { text: "Quality Control", correct: false},
            { text: "Human Resource", correct: false},
            { text: "Production", correct: false},
        ]
    },
    {
        question :"An __________ is considered to be a vertical move in terms of rank and responsibilities.",
        answers : [
            { text: "Appraisal", correct: false},
            { text: "Reward", correct: false},
            { text: "Increment", correct: false},
            { text: "Promotion", correct: true},
        ]
    },
    {
        question :"Which of the following provides necessary information for job evaluation?",
        answers : [
            { text: "Job Enrichment", correct: false},
            { text: "Job Description", correct: true},
            { text: "Job Ranking", correct: false},
            { text: "Job Enlargement", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answerbtns");
const nextbutton = document.getElementById("nxtbtn");
const homebutton = document.getElementById("Home");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState() {
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function homepage() {location.assign("index.html");}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "play Again";
    nextbutton.style.display = "block";
    homebutton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();