$(document).ready(function () {
    // Needed variables
    // Correct guesses
    // Incorrect guesses

    // Timer for the page, 30 seconds total atm about 15 secs per question
    var sec = 30;
    var time = setInterval(myTimer, 1000);
    var quizContainer = document.getElementById("question");

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
    ];

    // Function to make questions appear on HTML
    function showQuestions(questions, quizContainer) {

        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // Make box for each question
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];
            console.log(answers);

            // Create radio button for each answer
            for (letter in questions[i].answers) {

                // HTML radio button with labels and line breaks
                answers.push(
                    '<br>'
                    + '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    showQuestions(questions, quizContainer);

    // Questions screen gives options for player to click, 4 clickable buttons

    // 10 questions

    // When game extends, it shows the correct guesses and incorrect guesses amount

    // Reset game function shows beginning correct guesses reset, incorrect guesses reset, timer reset

})