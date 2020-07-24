var eightBall = document.querySelector('.eight-ball');
var answerButton = document.querySelector('.answer-button');
var clearButton = document.querySelector('.clear-button');
var userInput = document.querySelector('.user-input');
var questionAnswer = document.querySelector('.question-answer')

var answersArray = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful",
]


window.addEventListener("click", clickHandler)

function clickHandler(event) {
  if (event.target === answerButton) {
    document.getElementById("eight-ball").hidden = true;
    answer();
    console.log("answer button clicked")
  }
  if (event.target === clearButton) {

    console.log("clear button clicked")
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function answer() {
  newAnswer = answersArray[getRandomIndex(answersArray)];
  console.log("answer function runs");
  questionAnswer.innerText = newAnswer
}


function inputClear() {
  document.getElementById("user-input").innerText.length === 0;
}
