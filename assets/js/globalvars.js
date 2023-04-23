//this declares the number of answer per question
var numberOfAnswers = 4;

//to avoid hardcoded values when checking the answer states this variable is handy
var answerStates = {
  correct: "correct",
  wrong: "wrong"
};

//game rules
var rules = {
  // timer counter in seconds
  timerCount: 50,
  //deducts 10 seconds from the timer on a wrong answer
  penaltyOnWrongAnswer: 10
};

var localStorageElements = {
  score: "score"
}

var scoreStructure = {
  initial: "",
  score: 0
}
