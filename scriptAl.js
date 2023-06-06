const questions = [
    {
        question :"Who is the inventor of Artificial Intelligence?",
        answers : [
            { text: "Geoffrey Hinton", correct: false},
            { text: "Andrew Ng", correct: false},
            { text: "John McCarthy", correct: true},
            { text: "Jürgen Schmidhuber", correct: false},
        ]
    },
    {
        question :"Which of the following is the branch of Artificial Intelligence?",
        answers : [
            { text: "Machine Learning", correct: true},
            { text: "Cyber forensics", correct: false},
            { text: "Full-Stack Developer", correct: false},
            { text: "Network Design", correct: false},
        ]
    },
    {
        question :"What is the goal of Artificial Intelligence?",
        answers : [
            { text: "To solve artificial problem", correct: false},
            { text: "To extract scientific causes", correct: false},
            { text: "To explain various sorts of intelligence", correct: true},
            { text: " To solve real-world problems", correct: false},
        ]
    },
    {
        question :"In how many categories process of Artificial Intelligence is categorized?",
        answers : [
            { text: "categorized into 5 categories", correct: false},
            { text: "processes are categorized based on the input provided", correct: false},
            { text: "categorized into 3 categories", correct: true},
            { text: "process is not categorized", correct: false},
        ]
    },
    {
        question :"Based on which of the following parameter Artificial Intelligence is categorized?",
        answers : [
            { text: "Based on functionally only", correct: false},
            { text: "Based on capabilities only", correct: false},
            { text: "It is not categorized", correct: false},
            { text: "Based on capabilities and functionally", correct: true},
        ]
    },
    {
        question :"Which of the following is a component of Artificial Intelligence?",
        answers : [
            { text: "Learning", correct: true},
            { text: "Training", correct: false},
            { text: "Designing", correct: false},
            { text: "Puzzling", correct: false},
        ]
    },
    {
        question :"Which of the following is not a type of Artificial Intelligence agent?",
        answers : [
            { text: "Learning AI agent", correct: false},
            { text: "Goal-based AI agent", correct: false},
            { text: "Simple reflex AI agent", correct: false},
            { text: "Unity-based AI agent", correct: true},
        ]
    },
    {
        question :"Which of the following is not an application of artificial intelligence?",
        answers : [
            { text: "Face recognition system", correct: false},
            { text: "Chatbots", correct: false},
            { text: "LIDAR", correct: false},
            { text: "DBMS", correct: true},
        ]
    },
    {
        question :"The total number of proposition symbols in AI are",
        answers : [
            { text: "3 proposition symbols", correct: false},
            { text: "1 proposition symbols", correct: false},
            { text: "2 proposition symbols", correct: true},
            { text: "No proposition symbols", correct: false},
        ]
    },
    {
        question :"Which of the following are the approaches to Artificial Intelligence?",
        answers : [
            { text: "Applied approach", correct: false},
            { text: "Strong approach", correct: false},
            { text: "Weak approach", correct: false},
            { text: "All of the mentioned", correct: true},
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
    };
    homebutton.style.display = "none";
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
