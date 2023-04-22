//this declares the number of answer per question
var numberOfAnswers = 4;

//to avoid hardcoded values when checking the answer states this variable is handy
var answerStates = {
  correct: "correct",
  wrong: "wrong"
};

/***************  !!!! IMPORTANT !!! ***************************
The questions array is at the end of the file, it must be 
maintained when a new question is added or an existing is removed
****************************************************************/

/******* Questions **********/
var question1 = {
  question: "Question 1",
  answer1Text: "Answer 1 - wrong",
  answer1State: answerStates.wrong,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - correct",
  answer3State: answerStates.correct,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong
};

var question2 = {
  question: "Question 2",
  answer1Text: "Answer 1 - wrong",
  answer1State: answerStates.wrong,
  answer2Text: "Answer 2 - correct",
  answer2State: answerStates.correct,
  answer3Text: "Answer 3 - wrong",
  answer3State: answerStates.wrong,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong
};

var question3 = {
  question: "Question 3",
  answer1Text: "Answer 1 - correct",
  answer1State: answerStates.correct,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - wrong",
  answer3State: answerStates.wrong,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong
};

var question4 = {
  question: "Question 4",
  answer1Text: "Answer 1 - wrong",
  answer1State: answerStates.wrong,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - wrong",
  answer3State: answerStates.wrong,
  answer4Text: "Answer 4 - correct",
  answer4State: answerStates.correct
};

var question5 = {
  question: "Question 5",
  answer1Text: "Answer 1 - wrong",
  answer1State: answerStates.wrong,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - correct",
  answer3State: answerStates.correct,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong
};
/******* END Questions **********/

//this is an important array, the application goes through this one
var questions = [question1, question2, question3, question4, question5];
