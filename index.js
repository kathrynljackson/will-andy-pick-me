var eightBall = document.querySelector('eight-ball.png');
var answerButton = document.querySelector('.answer-button');
var clearButton = document.querySelector('.clear-button');
var userInput = document.querySelector('.user-input');

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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function answer() {
  newAnswer = answersArray[getRandomIndex(answersArray)]
}

window.addEventListener("click", clickHandler)

function clickHandler(event) {
  if (event.target === answerButton) {
    answer();
    console.log("answer button clicked")
  }
  if (event.target === clearButton) {
    userInput.innerText.length === 0;
    console.log("clear button clicked")
  }
}
