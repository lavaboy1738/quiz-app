export default function Quiz(questions){
    this.questions = questions;
    this.totalScore = questions.length
    this.currentScore = 0;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex]
}

Quiz.prototype.getFinalScore = function(){
    return `${this.currentScore}/${this.totalScore}`
}

Quiz.prototype.nextQuestion = function(){
    this.currentQuestionIndex++;
}

Quiz.prototype.restartQuiz = function(){
    this.currentScore = 0;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.quizEnded = function(){
    return this.currentQuestionIndex === this.questions.length;
}

Quiz.prototype.guess = function(userInput){
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if(currentQuestion.isCorrect(userInput)){
        this.currentScore++;
    }
    this.nextQuestion();
}