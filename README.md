---
permalink: /index.html
---

I really love cats. Here is a cat trivia game :)

HTML:
-Used CSS for the background image of random flying kitties
-Bootstrap was used to create the inner column body... there's more code linking the HTML to the bootstrap than actual bootstrap lmao it looks good though :)
-Divs with ids for the timer, question sections, and the results

Javascript:

-Timer function for 200 seconds, about 20 seconds per question interval 1000 milliseconds
-Timeout that causes the page to show results after 200 seconds
-Questions variable, made up of an array of questions that have properties question, answers, correct answer, (could be turned into an API, it took up a lot of space)
-Each possible answer is given a radio button, put into an answers box that contains all the radio buttons so for that answers array there can only be one chosen answer at a time, displays the question with the answers box underneath it on the HTML
-When submit button is clicked, it calls the values from numCorrect and questions.length to get the string of "Your score was # out of 10!" to display in the results div
-if and else statements, if the answers are correct their answer container text is colored green, else if the answer is wrong then the answer container text gets colored red.


Future Updates:
-Make the submit button stick to the bottom of the screen with some padding and a black/dark grey background
-Make a div with the timer stick to the top of the screen with a black background
-Make timer display minutes as well as seconds