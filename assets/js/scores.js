var highScoresElement = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

function displayHighScores() {
  var savedScores = localStorage.getItem(localStorageElements.score); // get the score, or the initial value if empty
  var highScores = [...JSON.parse(savedScores), scoreStructure];
  
  for(var i=0; i<highScores.length; i++) {
    var li = document.createElement("li");
    console.log(highScores[i]);
    var aa = highScores[i].initial;



    console.log(highScores);
    //var score = JSON.parse();

    //li.textContent = score.initial;
    //highScoresElement.appendChild(li);

  }
  
}

function clearHighScores() {

}

clearButton.addEventListener("click", clearHighScores);
displayHighScores();