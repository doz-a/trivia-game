$(document).ready(function () {
    // Needed variables
    // Correct guesses
    // Incorrect guesses

    // Timer for the page, 30 seconds total atm about 15 secs per question
    var sec = 200;
    var time = setInterval(myTimer, 1000);
    // var quizContainer =
    var quizContainer = document.getElementById("question");
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    // Timer showing seconds left (change to add minutes as well )
    function myTimer() {
        document.getElementById('timer').innerHTML = sec + " seconds left!";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            document.getElementById("timer").innerHTML = "Time is up :(";
            // Insert reset here 
            // Insert code for timeout
        }
    }

    // Questions object possible answers, correct answer
    var questions = [
        // Begin Q1 
        {
            question: "How long do cats sleep per day?",
            answers: {
                a: "ALL day",
                b: "Only after they eat",
                c: "Right until before their owner gets home",
                d: "6 hours",
            },
            correctAnswer: "a"

        },
        // End Q1 

        // Begin Q2 
        {
            question: "How many feral cats live in the United States?",
            answers: {
                a: "10 million",
                b: "100 thousand",
                c: "700 million",
                d: "50 thousand",
            },
            correctAnswer: "c"

        },
        // End Q2 

        // Begin Q3
        {
            question: "How many bones do cats have?",
            answers: {
                a: "150",
                b: "800",
                c: "60",
                d: "230",
            },
            correctAnswer: "d"

        },
        // End Q3 

        // Begin Q4 
        {
            question: "What effect does catnip have on cats?",
            answers: {
                a: "Makes them tired",
                b: "Affects them in similar ways marijuana or LSD do in humans",
                c: "Makes them hungry",
                d: "Affects their appetite to release less hunger hormones",
            },
            correctAnswer: "b"

        },
        // End Q4 

        // Begin Q5
        {
            question: "With what animal do cats share most of their genome with?",
            answers: {
                a: "Tigers",
                b: "Panthers",
                c: "Lions",
                d: "Leopards",
            },
            correctAnswer: "a"

        },
        // End Q5

        // Begin Q6 
        {
            question: "How many feral cats live in the United States?",
            answers: {
                a: "10 million",
                b: "100 thousand",
                c: "700 million",
                d: "50 thousand",
            },
            correctAnswer: "c"

        },
        // End Q6 

        // Begin Q7 
        {
            question: "How many feral cats live in the United States?",
            answers: {
                a: "10 million",
                b: "100 thousand",
                c: "700 million",
                d: "50 thousand",
            },
            correctAnswer: "c"

        },
        // End Q7 

        // Begin Q8 
        {
            question: "How many feral cats live in the United States?",
            answers: {
                a: "10 million",
                b: "100 thousand",
                c: "700 million",
                d: "50 thousand",
            },
            correctAnswer: "c"

        },
        // End Q8 
    ];
    // End questions 

    // Function to make questions appear on HTML
    function showQuestions(questions, quizContainer) {

        // HTML output and answers
        var output = [];
        var answers;

        // Make box for each question
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // Create radio button for each answer
            for (letter in questions[i].answers) {

                // HTML radio button with labels and line breaks
                answers.push(
                    "<br>"
                    + "<label>"
                    + "<input type='radio' name='question" + i + "' value='" + letter + "'>"
                    + " " + letter + ": "
                    + questions[i].answers[letter]
                    + "</label>"
                );
            }

            // Add this question and its answers to the output array
            output.push(
                "<div class='question'>" + questions[i].question + "</div>"
                + "<div class='answers'>" + answers.join("") + "</div>"
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join("");
    }
    // End show questions function 

    // Calling function to show the questions on the page
    showQuestions(questions, quizContainer);

    // Start submit button to show results on HTML 

    function showResults(questions, quizContainer, resultsContainer) {

        // Select all submitted answers
        var answerContainers = quizContainer.querySelectorAll(".answers");

        var userAnswer = "";
        var numCorrect = 0;

        // For loop for each question 
        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector("input[name=question" + i + "]:checked") || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                // Increase correct answers 
                numCorrect++;

                // Color right answers green 
                answerContainers[i].style.color = "lightgreen";
            }

            // Wrong answer, or blank answer
            else {
                // Color wrong answers red 
                answerContainers[i].style.color = "red";
            }
        }
        // Display correct answers out of total
        resultsContainer.innerHTML = numCorrect + "out of " + questions.length
    }

    // Click on submit button, shows results 
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
    // When game ends, it shows the correct guesses and incorrect guesses amount
    // Reset game function shows beginning correct guesses reset, incorrect guesses reset, timer reset
})