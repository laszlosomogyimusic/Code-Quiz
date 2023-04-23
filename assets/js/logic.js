var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var finalScoreElement = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");
var initialsElement = document.querySelector("#initials");

var isEndGame = false;

//the actual question number (works from the questions array)
var questionNumber = 0;
//timer counter in seconds
var timerCount = rules.timerCount;

//the score number. Increments by 1 on a correct answer
var score = 0;

function initVars() {
  isEndGame = false;
  timerCount = rules.timerCount;
  questionNumber = 0;
  score = 0;
}

function startGame() {
  initVars();
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  hideElement(feedback);
  hideElement(startScreen);
  hideElement(endScreen);

  startTimer();
  //loads the first question, because the questionNumber is initialised to 0
  displayQuestion(questions[questionNumber]);
}

// The endGame function is called when timer reaches 0
function endGame() {
  finalScoreElement.textContent = score;
  startButton.disabled = false;
  hideElement(questionsElement);
  clearChoices();
  showElement(startScreen);
  showElement(endScreen);
}

function generateChoices(selectedQuestion) {
  var ol = document.createElement("ol");
  ol.setAttribute("id", "choices-list");

  //the answer list starts from 1 (see questions.js)
  for(var i=1; i<=numberOfAnswers; i++) {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    //dynamically create the variable name: selectedQuestion.answer1Text, selectedQuestion.answer2Text, etc...
    btn.textContent = eval("selectedQuestion.answer"+i+"Text");
    //dynamically create the variable name: selectedQuestion.answer1State, selectedQuestion.answer2State, etc...
    btn.dataset.state = eval("selectedQuestion.answer"+i+"State");
    
    //this event evaluates the answer and displays the next question or end the game
    btn.addEventListener("click", evaluateAnswer);

    li.appendChild(btn);
    ol.appendChild(li);
  }

  choices.appendChild(ol);
}

//this function clears the choices list
function clearChoices() {
  if(choices.childElementCount > 0) {
    var choicesList = document.querySelector("#choices-list");
    choices.removeChild(choicesList);
  }
}

//the displayQuestion shows the question and choices
function displayQuestion(selectedQuestion) {
  showElement(questionsElement);
  questionTitle.textContent = selectedQuestion.question;
  generateChoices(selectedQuestion);
}

//this function could either finish the quiz when reach the last question
//or loads the next question
function prepareNextQuestion() {
  questionNumber++;

  hideElement(feedback);
  hideElement(questionsElement);
  clearChoices();  
  if(questionNumber === questions.length) {
    isEndGame = true;
  } else {
    displayQuestion(questions[questionNumber]);
  }
}

//this is a button click event, which evaluates the actual answer
//and loads the next question
function evaluateAnswer(event) {
  var feedbackText = "";
  var audio = ""; 

  if(this.dataset.state === answerStates.correct) {
    score++;
    feedbackText = "Correct answer";
    audio = new Audio('assets/sfx/correct.wav');
  } else {
    timerCount = timerCount - rules.penaltyOnWrongAnswer;
    if(timerCount <= 0) {
      isEndGame = true;
      //this is a trick to display 0 timercount at the end screen, because
      //the main timer keeps going for one more round. If you set it to 0, then the
      //end screen will display -1
      timerCount = 1;
    }
    feedbackText = "Wrong answer";
    
    audio = new Audio('assets/sfx/incorrect.wav');
  }

  feedback.textContent = feedbackText;
  showElement(feedback);
  audio.play();

  //the feedback is already displayed
  //keep it on the screen for 1 second 
  //then prepare the next question
  setTimeout(prepareNextQuestion, 1000);
}


// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if(isEndGame || timerCount === 0) {
      clearInterval(timer);
      endGame();
    }

  }, 1000);
}

//add the hide class to the HTML element
function hideElement(element) {
  element.className += " hide";
}

//remove the hide class from the HTML element
function showElement(element) {
  element.className = element.className.replace( /(?:^|\s)hide(?!\S)/g , '' );
}

//save the score to the local storage
function saveScore() {
  var savedScores = localStorage.getItem(localStorageElements.score)  || '[]'; // get the score, or the initial value if empty

  scoreStructure.initial = initialsElement.value;
  scoreStructure.score = score;

  const highScores = [...JSON.parse(savedScores), scoreStructure] // add the result
  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 5) // take highest 5

  localStorage.setItem(localStorageElements.score, JSON.stringify(highScores));
}

function displayHighScore() {
  saveScore();
  window.location.href = "highscores.html";
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", displayHighScore);

