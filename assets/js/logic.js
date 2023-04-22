var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
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
  displayQuestion();
}

// The endGame function is called when timer reaches 0
function endGame() {
  //TBD
  startButton.disabled = false;
  showElement(startScreen);
  showElement(endScreenElement);
}

function buttonClicked(event) {
  var feedbackText = "";

  if(this.dataset.state === "correct") {
    feedbackText = "Correct answer";
  } else {
    feedbackText = "Wrong answer";
  }

  feedback.textContent = feedbackText;
  showElement(feedback);
}

function generateChoices() {
  var ol = document.createElement("ol");

  for(var i=0; i<4; i++) {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.textContent = "Answer " + (i+1);
    btn.addEventListener("click", buttonClicked);

    if(i===1) {
      btn.dataset.state = "correct";
    } else {
      btn.dataset.state = "wrong";
    }
    li.appendChild(btn);
    ol.appendChild(li);
  }

  choices.appendChild(ol);
}

//the displayQuestion shows the question and choices
function displayQuestion() {
  showElement(questions);
  questionTitle.textContent = "First Question";
  generateChoices();
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

