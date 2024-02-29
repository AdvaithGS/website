const total = 4;

var questions = [];
function clean(x) {
  if (x[0] == ' ' || x[0] == "\r") {
    x = x.substr(1);
  } if (x[x.length - 1] === ' ' || x[x.length -1] === '\r') {
    x = x.substr(0, x.length - 1);
  }
  return x;
}
document.addEventListener('DOMContentLoaded', function () {
fetch("synonyms.txt")
  .then((res) => res.text())
  .then((text) => {
    var l = text.split('\n');
    for (var i = 0; i < l.length; i++) {
      l[i] = l[i].split(',');
    }
    l = l.sort(() => 0.5 - Math.random());
    l = l.slice(0, 16);
    for (var i = 0; i < total; i++) {
      l[i] = l[i].sort(() => 0.5 - Math.random());
      l[i][0] = clean(l[i][0]);
      l[i][1] = clean(l[i][1]);
      questions.push({ word: l[i][0], correctAnswer: l[i][1] });
    }
    for (var i = 0; i < total; i++) {
      questions[i].options = [questions[i].correctAnswer];
      for (var j = 0; j < 16; j++) {
        if (i === j) continue;
        if (Math.random() >= 0.5) {
          questions[i].options.push(clean(l[j][Math.floor(Math.random() * (l[j].length))]));
        }
        if (questions[i].options.length === 4) {
          questions[i].options = questions[i].options.sort(() => 0.5 - Math.random());
          break;
        } else if (j === 15) {
          j = 0;
        }
      }
    }
    
    loadQuestion();
  })
  .catch((e) => console.error(e));
  document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedOption = event.submitter;
    checkAnswer(selectedOption);
  });
})


let index = 0;

const option1Element = document.getElementById('option1');
const option2Element = document.getElementById('option2');
const option3Element = document.getElementById('option3');
const option4Element = document.getElementById('option4');
const questionElement = document.getElementById('question');
const feedbackElement = document.getElementById("feedback");

function loadQuestion() {
  var currentQuestion = questions[index];
  questionElement.textContent = currentQuestion.word;
  option1Element.value = currentQuestion.options[0];
  option2Element.value = currentQuestion.options[1];
  option3Element.value = currentQuestion.options[2];
  option4Element.value = currentQuestion.options[3];
  let SolutionButton = null;
  document.getElementsByName("option").forEach((element) =>
    SolutionButton = (element.value === currentQuestion.correctAnswer) ? element : SolutionButton
  );
  SolutionButton.classList.remove("Wrong");
  SolutionButton.classList.add("Solution");
}

function checkAnswer(selectedOption) {
  let currentQuestion = questions[index];
  let answer = selectedOption.value;
  let SolutionButton = selectedOption;
  document.getElementsByName("option").forEach((element) =>
    SolutionButton = (element.value === currentQuestion.correctAnswer) ? element : SolutionButton
  );
  if (answer !== currentQuestion.correctAnswer) {
    SolutionButton.click();
  }
  var currentTime = new Date().getTime();
  while (currentTime + 2000 >= new Date().getTime()) { }
  if (index != questions.length - 1){
    index++
  }else{
    window.location.reload();
  };
  loadQuestion();

}