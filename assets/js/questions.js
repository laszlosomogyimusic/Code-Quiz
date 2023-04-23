/***************  !!!! IMPORTANT !!! ***************************
The questions array is at the end of the file, it must be 
maintained when a new question is added or an existing is removed
****************************************************************/

/******* Questions **********/
var question1 = {
  question: "JavaScript File Has An Extension of:",
  answer1Text: ".java",
  answer1State: answerStates.wrong,
  answer2Text: ".js",
  answer2State: answerStates.correct,
  answer3Text: ".javascript",
  answer3State: answerStates.wrong,
  answer4Text: ".xml",
  answer4State: answerStates.wrong
};

var question2 = {
  question: "The Tag is used To Give Heading To The Table.",
  answer1Text: "Head",
  answer1State: answerStates.wrong,
  answer2Text: "Td",
  answer2State: answerStates.wrong,
  answer3Text: "Th",
  answer3State: answerStates.correct,
  answer4Text: "Caption",
  answer4State: answerStates.wrong
};

var question3 = {
  question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
  answer1Text: "Is Not a Null",
  answer1State: answerStates.wrong,
  answer2Text: "Is Not a Number",
  answer2State: answerStates.correct,
  answer3Text: "Is Not a New Object",
  answer3State: answerStates.wrong,
  answer4Text: "None Of The Above",
  answer4State: answerStates.wrong
};

var question4 = {
  question: "Function is Used To Parse a String To Int:",
  answer1Text: "Integer.Parse",
  answer1State: answerStates.wrong,
  answer2Text: "Int.Parse",
  answer2State: answerStates.wrong,
  answer3Text: "Parse.Int",
  answer3State: answerStates.wrong,
  answer4Text: "None of The Above",
  answer4State: answerStates.correct
};

var question5 = {
  question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
  answer1Text: "Alert()",
  answer1State: answerStates.wrong,
  answer2Text: "Prompt()",
  answer2State: answerStates.correct,
  answer3Text: "Confirm()",
  answer3State: answerStates.wrong,
  answer4Text: "Msg()",
  answer4State: answerStates.wrong
};

var question6 = {
  question: "If Button is clicked .......Event Handler is invoked.",
  answer1Text: "OnSubmit()",
  answer1State: answerStates.wrong,
  answer2Text: "OnLoad()",
  answer2State: answerStates.wrong,
  answer3Text: "IsPostBack()",
  answer3State: answerStates.wrong,
  answer4Text: "Onclick()",
  answer4State: answerStates.correct
};

/******* END Questions **********/

//this is an important array, the application goes through this one
var questions = [question1, question2, question3, question4, question5, question6];
