let questions=[
    {
        question: "your school",
        answers: [
            {text: "RVR",correct: false},
            {text: "RVS",correct: true},
            {text: "CHIN",correct: false},
            {text: "Nakku",correct: false},
            
        ]
    },
    {
        question: "your college",
        answers: [
            {text: "KPR",correct: true},
            {text: "RVR",correct: false},
            {text: "CHIN",correct: false},
            {text: "Nakku",correct: false},
            
        ]
    },
    {
        question: "your name",
        answers: [
            {text: "RVR",correct: false},
            {text: "CHIN",correct: false},
            {text: "JAI",correct: true},
            {text: "Nakku",correct: false},
            
        ]
    },
    {
        question: "your favourite",
        answers: [
            {text: "RVR",correct: false},
            {text: "coding",correct: true},
            {text: "CHIN",correct: false},
            {text: "Nakku",correct: false},
            
        ]
    }
];
let questionGiven=document.getElementById("question");
let answerButtons=document.getElementById("answer");
let nextButton=document.getElementById("next-btn");
let currentQuestionNumber=0;
let score=0;

function startQuiz(){
    currentQuestionNumber=0;
    score=0;
    nextButton.innerHTML="NEXT";
    shwoQuestion();
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        // console.log(answerButtons);
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function shwoQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionNumber];
    let questionNumber=currentQuestionNumber+1;
    questionGiven.innerHTML=questionNumber+". "+currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function selectAnswer(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct=="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        console.log(score++);
    }
    else selectedButton.classList.add("incorrect");

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionGiven.innerHTML=`SCORE := ${score}/${questions.length}`;
    nextButton.innerHTML="RESTART";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber<questions.length)shwoQuestion();
    else showScore();
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionNumber<questions.length)handleNextButton();
    else startQuiz();
})
startQuiz();
