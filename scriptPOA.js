const questions = [
    {
        question :"Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?",
        answers : [
            { text: "64 years", correct: false},
            { text: "30 years", correct: false},
            { text: "48 years", correct: false},
            { text: "42 years", correct: true},
        ]
    },
    {
        question :"Rohan's age is five times Ajay’s and seven-eighteenth of Meena’s age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?",
        answers : [
            { text: "56 years", correct: false},
            { text: "83 years", correct: true},
            { text: "27 years", correct: false},
            { text: "Cannot be determined", correct: false},
        ]
    },
    {
        question :"The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
        answers : [
            { text: "33 years", correct: false},
            { text: "30 years", correct: false},
            { text: "27 years", correct: true},
            { text: "24 years", correct: false},
        ]
    },
    {
        question :"Ram and Shyam’s average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
        answers : [
            { text: "29 years", correct: true},
            { text: "31 years", correct: false},
            { text: "49 years", correct: false},
            { text: "55 years", correct: false},
        ]
    },
    {
        question :"The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago",
        answers : [
            { text: "3:2", correct: false},
            { text: "46:25", correct: false},
            { text: "12:23", correct: true},
            { text: "8:3", correct: false},
        ]
    },
    {
        question :"Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",
        answers : [
            { text: "32 years", correct: false},
            { text: "64 years", correct: false},
            { text: "52 years", correct: true},
            { text: "36 years", correct: false},
        ]
    },
    {
        question :" Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",
        answers : [
            { text: "4 years", correct: false},
            { text: "1 year", correct: false},
            { text: "2 years", correct: false},
            { text: "3 years", correct: true},
        ]
    },
    {
        question :"12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",
        answers : [
            { text: "54 years", correct: false},
            { text: "36 years", correct: true},
            { text: "24 years", correct: false},
            { text: "144 years", correct: false},
        ]
    },
    {
        question :"The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K",
        answers : [
            { text: "9 years", correct: true},
            { text: "12 years", correct: false},
            { text: "5 years", correct: false},
            { text: "3 years", correct: false},
        ]
    },
    {
        question :"A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?",
        answers : [
            { text: "50", correct: false},
            { text: "72", correct: false},
            { text: "68", correct: false},
            { text: "65", correct: true},
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