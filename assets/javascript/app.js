$(document).ready(function () {
    // Needed variables
    // Correct guesses
    // Incorrect guesses

    // Timer for the page, 200 seconds total atm about 20 secs per question
    var sec = 200;
    var time = setInterval(myTimer, 1000);

    var quizContainer = document.getElementById("question");
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    // Timer showing seconds left (change to add minutes as well )
    function myTimer() {
        document.getElementById('timer').innerHTML = sec + " seconds left!";
        sec--;

        // Timeout 
        if (sec == -1) {
            clearInterval(time);

            // Text into timer div 
            document.getElementById("timer").innerHTML = "Time is up :(";

            // Shows results 
            showResults(questions, quizContainer, resultsContainer);
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
                a: "319, just like doggos",
                b: "351, just as many as an elephant",
                c: "70, 10 more than turtles",
                d: "230, 20 more than humans",
            },
            correctAnswer: "d"

        },
        // End Q3 

        // Begin Q4 
        {
            question: "What effect does catnip have on cats?",
            answers: {
                a: "It makes them sweepy",
                b: "Affects them in similar ways marijuana or LSD do in humans",
                c: "Makes them hangry",
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
                d: "Turtles",
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
            question: "What is your cat indicating when she lightly bites you without breaking your skin?",
            answers: {
                a: "She is angry with you",
                b: "She wants you to give her attention",
                c: "sHe NeEdS tO bE fEd",
                d: "She wants to show you that she loves you",
            },
            correctAnswer: "d"

        },
        // End Q7 

        // Begin Q8 
        {
            question: "How many toes do cats have?",
            answers: {
                a: "18 toes 5 on each front and 4 on each back paw",
                b: "20 toes 5 on each paw",
                c: "10 toes 10 paws",
                d: "16 toes 4 on each paw",
            },
            correctAnswer: "a"

        },
        // End Q8 

        // Begin Q9
        {
            question: "What animal has better hearing than cats?",
            answers: {
                a: "Dogs",
                b: "Humans",
                c: "Turtles",
                d: "None of the above, cats are the best",
            },
            correctAnswer: "d"

        },
        // End Q9

        // Begin Q10
        {
            question: "What does it mean when a cat rubs its body or face on you?",
            answers: {
                a: "She is attempting to mark you with its pheremones to show that you are part of her pack",
                b: "She's using you as a napkin, wiping off the blood of the animals it has killed",
                c: "She wants to camouflage her scent using yours",
                d: "She's trying to transfer fleas to your body",
            },
            correctAnswer: "a"

        },
        // End Q10
    ];
    // End questions 

    // Function to make questions appear on HTML
    function showQuestions(questions, quizContainer) {

        // HTML output and answers
        var output = [];
        var answers;

        // For each question
        for (var i = 0; i < questions.length; i++) {

            //Reset the list of answers
            answers = [];

            // Create radio button for each answer
            for (letter in questions[i].answers) {

                // HTML radio button with labels and line breaks, assigns a letter to each button
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
                "<hr>" + "<div class='question'>" + questions[i].question + "</div>"
                + "<div class='answers'>" + answers.join("") + "</div>"
            );
        }

        // Finally combine our output list into one string of html and put it on the page
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
        resultsContainer.innerHTML = "Your score was " + numCorrect + " out of " + questions.length + "!"
    }

    // Click on submit button, shows results 
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
})