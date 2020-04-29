import Question from "./question.js";
import Quiz from "./quiz.js";

const q1 = new Question("Best Rapper Alive?", ["Eminem", "Marshall Mathers", "Slim Shady", "Bunny Rabbit"], 0);
const q2 = new Question("Second Question", ["Lily", "is", "a", "bitch"], 3);
const q3 = new Question();
const q4 = new Question();
const q5 = new Question();
const q6 = new Question();
const q7 = new Question();

const qArray = [q1, q2, q3, q4, q5, q6, q7];

const newQuiz = new Quiz(qArray);

console.log(newQuiz.getCurrentQuestion());
console.log(newQuiz.guess(0));
console.log(newQuiz.currentQuestionIndex);
console.log(newQuiz.getCurrentQuestion());