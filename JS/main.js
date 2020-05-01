import Question from "./question.js";
import Quiz from "./quiz.js";

const App = (()=> {
    // caching the DOM
    const quizQuestion = document.querySelector(".quiz__question")
    const quizProgress = document.querySelector(".quiz__progress-inner")
    const quizTracker = document.querySelector(".quiz__tracker")
    const quizChoices = document.querySelector(".quiz__choices")
    const nextBtn = document.querySelector(".next")
    const restartBtn = document.querySelector(".restart")
    const quizInstruction = document.querySelector(".quiz__instructions")

    //quiz questions
    const q1 = new Question(
        "What is Drake's name?",
        ["Drake", "Drizzy", "Aubrey", "Adonis"],
        2
    )

    const q2 = new Question(
        "Where is he from?",
        ["Vancouver", "Toronto", "Montreal", "Ottawa"],
        1
    )

    const q3 = new Question(
        "Where did he start his career from?",
        ["the Basement", "the Bottom", "the Underpinning", "the Substratum"],
        1
    )

    const q4 = new Question(
        "Drake was born in the month of?",
        ["October", "July", "Janurary", "March"],
        0
    )

    const q5 = new Question(
        "What's the name of his clothing line?",
        ["Muttonhead", "Ice Cream", "OVO", "Reigning Champ"],
        2
    )

    const q6 = new Question(
        "I was running through the ______ with my woes.",
        ["city", "streets", "mall", "six"],
        3
    )

    const q7 = new Question(
        "What's the title of his latest project?",
        ["Toosie Slide", "Life is Good", "Dark Lane", "Care Package"],
        2
    )

    const qArray = [q1, q2, q3, q4, q5, q6, q7];

    const quiz = new Quiz(qArray);

    const renderQuestion = () =>{
        quizQuestion.innerText = quiz.getCurrentQuestion().question
    }

    const renderInstruction = (text) =>{
        quizInstruction.innerText = text
    }

    const renderChoices = () =>{
        let choiceNum = 0;
        for(let choice of quizChoices.children){
            choice.lastElementChild.innerHTML = `<span>${quiz.getCurrentQuestion().choices[choiceNum]}</span>`
            choice.firstElementChild.checked = false
            choiceNum++;
        }
    }

    const renderProgress = () =>{
        quizProgress.style.width = `${((quiz.currentQuestionIndex+1)/qArray.length)*100}%`
    }

    const renderTracker = () =>{
        quizTracker.innerText = `${quiz.currentQuestionIndex+1} of ${qArray.length}`

    }

    const renderResult = () =>{
        quizQuestion.innerText = "Great Job!"
        quizInstruction.innerText = `You Scored ${quiz.getFinalScore()}`
    }

    const disposeElements = () =>{
        const  elements = [quizChoices, nextBtn, quizProgress.parentElement, quizTracker]
        for(let element of elements){
            element.style.display = "none"
        }
    }

    const restoreElements = () =>{
        const elements = [nextBtn, quizProgress.parentElement, quizTracker]
        for(let element of elements){
            element.style.display = "block"
        }
        quizChoices.style.display = "flex"
    }

    const renderQuiz = () =>{
        if(quiz.quizEnded()){
            //take out all unnecessary elements
            disposeElements();
            //render the result
            renderResult();
        }else{
            //render the question
            renderQuestion();
            //render the instruction
            renderInstruction("Pick a choice from below");
            //render the choices
            renderChoices();
            //render the progress bar
            renderProgress();
            //render the tracker
            renderTracker();
        }
    }

    const nextQuestion = () =>{
        const answer = document.querySelector("input[name='choice']:checked")
        const userInput = Number(answer.id.slice(-1))
        quiz.guess(userInput);
        renderQuiz(quiz)
    }

    const restartQuiz = () =>{
        quiz.restartQuiz();
        //restore elements
        restoreElements();
        //render Quiz
        renderQuiz(quiz);
    }

    const listners = () =>{
        nextBtn.addEventListener("click", nextQuestion);
        restartBtn.addEventListener("click", restartQuiz);
    }

    return{
        render: renderQuiz,
        listners: listners
    }
})();

App.render()
App.listners()
