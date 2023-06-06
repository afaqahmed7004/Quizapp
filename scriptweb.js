const questions = [
    {
        question :"Which of the following can read and render HTML web pages",
        answers : [
            { text: "Server", correct: false},
            { text: "head tak", correct: false},
            { text: "Web browser", correct: true},
            { text: "notepad", correct: false},
        ]
    },
    {
        question :"_________ keyword is used to declare variables in javascript.",
        answers : [
            { text: "Var", correct: true},
            { text: "Dim", correct: false},
            { text: "String", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question :"Who is making the Web standards?",
        answers : [
            { text: "Mozilla", correct: false},
            { text: "Microsoft", correct: false},
            { text: "The World Wide Web Consortium", correct: true},
            { text: "NVDIA", correct: false},
        ]
    },
    {
        question :"Which HTML attribute is used to define inline styles?",
        answers : [
            { text: "font", correct: false},
            { text: "class", correct: false},
            { text: "style", correct: false},
            { text: "styles", correct: true},
        ]
    },
    {
        question :"The href attribute in the link tag specifies the:",
        answers : [
            { text: "Distination of link", correct: true},
            { text: "Link", correct: false},
            { text: "Hypertext", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question :"Which property does one use to align text to the right side of a block-level element in Cascading Style Sheets?",
        answers : [
            { text: "horizontal-align ", correct: false},
            { text: "align", correct: false},
            { text: "block-align", correct: false},
            { text: "text-align", correct: true},
        ]
    },
    {
        question :"Which of the following is NOT a Style?",
        answers : [
            { text: "Linked", correct: false},
            { text: "Embedded", correct: false},
            { text: "Inline", correct: false},
            { text: "Orthogonal", correct: true},
        ]
    },
    {
        question :"Orkut.com is owned by ___________",
        answers : [
            { text: "Google", correct: true},
            { text: "Yahoo", correct: false},
            { text: "Microsoft", correct: false},
            { text: "Apple", correct: false},
        ]
    },
    {
        question :"Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
        answers : [
            { text: "Associations", correct: false},
            { text: "Transitions", correct: true},
            { text: "Transistor", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question :"Who is the father of HTML?",
        answers : [
            { text: "Rasmus Lerdorf", correct: false},
            { text: "Tim Berners-Lee", correct: true},
            { text: "Brendan Eich", correct: false},
            { text: "Sergey Brin", correct: false},
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