var startScreenElement = document.querySelector("#start-screen");
var endScreenElement = document.querySelector("#end-screen");
var feedbackElement = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");



var isWin = false;
var timerCount = 0;

function startGame() {
  isWin = false;
  timerCount = 4;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
  hideElement(startScreenElement);
}

// The endGame function is called when timer reaches 0
function endGame() {
  //TBD
  startButton.disabled = false;
  showElement(startScreenElement);
  showElement(endScreenElement);
}

function displayQuestion() {
  showElement(questionsElement);
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

