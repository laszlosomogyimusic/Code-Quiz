var numberOfAnswers = 4;

var answerStates = {
  correct: "correct",
  wrong: "wrong"
};

var question1 = {
  question: "Question 1",
  answer1Text: "Answer 1 - wrong",
  answer1State: answerStates.wrong,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - correct",
  answer3State: answerStates.correct,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong,
};

var question2 = {
  question: "Question 2",
  answer1Text: "Answer 1 - correct",
  answer1State: answerStates.correct,
  answer2Text: "Answer 2 - wrong",
  answer2State: answerStates.wrong,
  answer3Text: "Answer 3 - wrong",
  answer3State: answerStates.wrong,
  answer4Text: "Answer 4 - wrong",
  answer4State: answerStates.wrong,
};

var questions = [question1, question2];