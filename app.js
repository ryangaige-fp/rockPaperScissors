// 3 buttons
//rock
//paper
//scissors

//computer make a random choice
//compare results
//document.getElementByID('result').innerHTML = "win"

//Stretch Goals
//play again
//keep track of # of wins and losses
// var paper = "paper"
// var scissors = "scissors"

var choices = ["Rock", "paper", "scissors"];

var randomPick = "";
var randomPick2 = "";
function play(pchoice) {
  randomPick = choices[pchoice];
  randomPick2 = choices[Math.floor(Math.random() * choices.length)];

  var element = (document.getElementById("player1").innerText = randomPick);
  var element = (document.getElementById("player2").innerText = randomPick2);

  if (randomPick == randomPick2) {
    alert("Draw");
    // document.getElementById('result').innerHTML = 'DRAW!'
  } else if (randomPick > randomPick2) {
    alert("player 1 Wins");
    // document.getElementById('randomPick').innerHTML = 'DRAW!'
  } else if (randomPick < randomPick2) {
    alert("player 2 wins");
    // document.getElementById('randomPick2').innerHTML = 'DRAW!'
  }
}

console.log(randomPick, randomPick2);
