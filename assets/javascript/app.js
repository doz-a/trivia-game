$(document).ready(function () {
    // Needed variables
    // Correct guesses
    // Incorrect guesses

    // Timer for the page 
    var sec = 30;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('timer').innerHTML = sec + " seconds left!";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            document.getElementById("timer").text("Time is up :(")
        }
    }

    // Object with questions, possible answers, correct answer 
    // Questions object
    // var questions = [
    //     // Begin Q1 
    //     {
    //         question: "How long do cats sleep per day?",
    //         answers: {
    //             a: "ALL day",
    //             b: "Only after they eat",
    //             c: "Right until before their owner gets home",
    //             d: "6 hours",
    //         },
    //         correctAnswer: "a"

    //     },
    //     // End Q1 

    //     // Begin Q2 
    //     {
    //         question: "How many feral cats live in the United States?",
    //         answers: {
    //             a: "10 million",
    //             b: "100 thousand",
    //             c: "700 million",
    //             d: "50 thousand",
    //         },
    //         correctAnswer: "c"

    //     },
    //     // End Q2 
    // ];

    // Function that shows question to the html with possible answers

    // Code for timeout

    // Questions screen gives options for player to click, 4 clickable buttons

    // 10 questions

    // When game extends, it shows the correct guesses and incorrect guesses amount

    // Reset game function shows beginning correct guesses reset, incorrect guesses reset, timer reset

})