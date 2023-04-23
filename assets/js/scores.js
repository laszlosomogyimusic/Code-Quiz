var highScoresElement = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

function displayHighScores() {
  var savedScores = localStorage.getItem(localStorageElements.score); // get the score, or the initial value if empty
  
  if (savedScores !== null) {
    var highScores = [...JSON.parse(savedScores), scoreStructure];
    
    for(var i=0; i<highScores.length; i++) {
      var li = document.createElement("li");
      console.log(highScores[i]);
      var aa = highScores[i].initial;
      var bb = highScores[i].score;
      li.textContent = highScores[i].initial + " - " + highScores[i].score;
      highScoresElement.appendChild(li);
    }
  }
}

function clearHighScores() {
  localStorage.clear();

  while (highScoresElement.firstChild) {
    highScoresElement.removeChild(highScoresElement.firstChild);
  }
  displayHighScores();
}

clearButton.addEventListener("click", clearHighScores);
displayHighScores();