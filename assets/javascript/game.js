// ----- pseudo code -----
// 7 multi choice questions
// set timer for 70 seconds, 10 seconds per question
//  when answer is selected it changes color and is saved (to be grade when the time finishes)

//  ---- when timer finishes ----
//  set function to determine correct answers
//  display correct answer in GREEN
// display fist bump image in top right



// start game
function start(){
    $("#start").on("click", function() {
        console.log(this);
        $("#start").css("display" , "none");
        $("img, #quiz, #submit").css("display" , "inherit");
        $(".jumbotron").css("margin-bottom", "-6%")
    });
}
start();

// populate quiz container
(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        
            question: "Who won the battle of the bands?",
            answers: {
              a: "Margles",
              b: "Magic Man",
              c: "Music Hole"
            },
            correctAnswer: "c"
          },
          {
            question: "Name the destroyer of worlds.",
            answers: {
              a: "Orgalorg",
              b: "Golb",
              c: "Marceline"
            },
            correctAnswer: "a"
          },
          {
            question: "What is the Easter egg throughout the show?",
            answers: {
              a: "BMO",
              b: "Finn's missing sock",
              c: "One red frisbee",
              d: "Waving Snail"
            },
            correctAnswer: "d"
          },
          {
            question: "Who evicted Finn and Jake from the treehouse?",
            answers: {
              a: "Shelby",
              b: "Marceline",
              c: "Ice King",
              d: "Peppermint Buttler"
            },
            correctAnswer: "b"
          },
          {
            question: "What fictional creature lives both in the sea and outerspace?",
            answers: {
              a: "Dragon",
              b: "Prismo",
              c: "Cyclops",
              d: "Lard"
            },
            correctAnswer: "d"
          },
          {
            question: ">Who is Jake's girlfriend?",
            answers: {
              a: "Tiffany",
              b: "Rabid Squirrel",
              c: "Lady Rainicorn",
              d: "Princess Bubblegum"
            },
            correctAnswer: "c"
          },
          {
            question: "Which name is NOT one of Jake's puppies?",
            answers: {
              a: "TV",
              b: "Viola",
              c: "Jake Jr",
              d: "John"
            },
            correctAnswer: "d"
          }
      
        
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
