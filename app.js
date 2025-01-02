let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// caching the DOM
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userWordSmall = "user".fontsize(3).sub();
  const compWordSmall = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${userWordSmall} beats ${convertToWord(
    compChoice
  )}${compWordSmall} <br>You win!`;
  document.getElementById(userChoice).classList.add("green-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}
function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userWordSmall = "user".fontsize(3).sub();
  const compWordSmall = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${userWordSmall} looses to ${convertToWord(
    compChoice
  )}${compWordSmall} <br>You lost...`;
  document.getElementById(userChoice).classList.add("red-glow");

  setTimeout(()=> // ES6
    document.getElementById(userChoice).classList.remove("red-glow")
  , 300); 

}
function draw(userChoice, compChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userWordSmall = "user".fontsize(3).sub();
  const compWordSmall = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${userWordSmall} equals ${convertToWord(
    compChoice
  )}${compWordSmall} <br>It's a draw.`;
  document.getElementById(userChoice).classList.add("grey-glow");

  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 300);

}

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
