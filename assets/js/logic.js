var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");


var isWin = false;
var timerCount = 0;

function startGame() {
  isWin = false;
  timerCount = 3;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
  hideElement(startScreen);
  displayQuestion(question2);
}

// The endGame function is called when timer reaches 0
function endGame() {
  //TBD
  startButton.disabled = false;
  showElement(startScreen);
  showElement(endScreen);
}

function buttonClicked(event) {
  var feedbackText = "";
  var audio = ""; 

  if(this.dataset.state === answerStates.correct) {
    feedbackText = "Correct answer";
    audio = new Audio('assets/sfx/correct.wav');
  } else {
    feedbackText = "Wrong answer";
    audio = new Audio('assets/sfx/incorrect.wav');
  }

  feedback.textContent = feedbackText;
  showElement(feedback);
  audio.play();

}

function generateChoices(selectedQuestion) {
  var ol = document.createElement("ol");

  for(var i=1; i<=numberOfAnswers; i++) {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    //dynamically create the variable name selectedQuestion.answer1Text, selectedQuestion.answer2Text, etc...
    btn.textContent = eval("selectedQuestion.answer"+i+"Text");
    //dynamically create the variable name selectedQuestion.answer1State, selectedQuestion.answer2State, etc...
    btn.dataset.state = eval("selectedQuestion.answer"+i+"State");
    btn.addEventListener("click", buttonClicked);

    li.appendChild(btn);
    ol.appendChild(li);
  }

  choices.appendChild(ol);
}

//the displayQuestion shows the question and choices
function displayQuestion(selectedQuestion) {
  showElement(questionsElement);
  questionTitle.textContent = selectedQuestion.question;
  generateChoices(selectedQuestion);
}

// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if(timerCount === 0) {
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


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

