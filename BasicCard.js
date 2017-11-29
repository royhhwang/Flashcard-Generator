var inquirer = require("inquirer");
var flashcards = require("./ClozeCard.js");

var questions = flashcards.quizQuestions;
var guessRight = flashcards.quizAnswers;
var clozeState = flashcards.statements;

function gameStart() {

    inquirer
        .prompt([
            {
                message: questions.q1 + "\n------------------\n" + "Your answer: \n",
                type: "input",
                name: "userAnswers"
            }
        ]).then(function (answers) {
            if (answers.userAnswers == guessRight.cut1) {
                console.log("\nYou're right!\n" + clozeState.back1 + "\n");
            }
            else {
                console.log("\nWrong!");
                console.log(clozeState.back1 + "\n");
            }

        }).then(function () {
            nextQuestion();
        })
};

function nextQuestion() {
    inquirer
        .prompt([
            {
                message: questions.q2 + "\n------------------\n" + "Your answer: \n",
                type: "input",
                name: "ua2"
            }
        ]).then(function (answers) {
            if (answers.ua2 == guessRight.cut2) {
                console.log("\nYou're right!\n" + clozeState.back2 + "\n");
            }
            else {
                console.log("Wrong!");
                console.log(clozeState.back2 + "\n");
            }

        }).then(function () {
            nextQuestion();
        })
};

gameStart();