var player;
var playerScore = 0;
var computer;
var computerScore = 0;

var moves = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    //move buttons
    let move = document.createElement("img");
    move.src = moves[i] + ".png";
    move.classList.add("move");
    move.addEventListener("click", selectChoice);
    document.getElementById("moves").appendChild(move);
  }
};

function selectChoice() {
  player = this.src.split("/").pop().split(".")[0]; //push png to box
  document.getElementById("Pmove").src = this.src;


computer = moves[Math.floor(Math.random() * 3)]; //computer choice
document.getElementById("Cmove").src = computer + ".png";

if(player==computer){
  playerScore+=1;
  computerScore+=1;
  alert('Its A Draw');
}



document.querySelector(".Pscore").innerText = playerScore;
document.querySelector(".Cscore").innerText = computerScore;
}