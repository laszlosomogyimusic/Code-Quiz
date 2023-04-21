var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var feedbackElement = document.querySelector("#feedback");
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

function displayQuestion() {
  showElement(questions);
  questionTitle.textContent = "First Question";
  var ol = document.createElement("ol");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

  var btn1 = document.createElement("button");
  btn1.dataset.state = "correct";
  var btn2 = document.createElement("button");
  btn2.dataset.state = "wrong";
  var btn3 = document.createElement("button");
  btn3.dataset.state = "wrong";  
  var btn4 = document.createElement("button");
  btn4.dataset.state = "wrong";

  btn1.textContent = "Answer 1";
  btn2.textContent = "Answer 2";
  btn3.textContent = "Answer 3";
  btn4.textContent = "Answer 4";

  li1.appendChild(btn1);
  li2.appendChild(btn2);
  li3.appendChild(btn3);
  li4.appendChild(btn4);

  ol.appendChild(li1);
  ol.appendChild(li2);
  ol.appendChild(li3);
  ol.appendChild(li4);
  choices.appendChild(ol);
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

