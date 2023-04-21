var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");


var isWin = false;
var timerCount = 0;

function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
}

// The endGame function is called when timer reaches 0
function endGame() {
  //TBD
  startButton.disabled = false;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
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

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

