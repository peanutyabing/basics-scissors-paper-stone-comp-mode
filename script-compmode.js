var userName = "";
var gameMode = "waiting for username";
var things = ["stone", "paper", "scissors"];

var pic = {
  stone: "🪨",
  paper: "🗒",
  scissors: "🔪",
};

// Blank leaderboard
var leaderBoard = {
  You: 0,
  Computer: 0,
};
console.log("leader board");
console.log(leaderBoard);

// Blank winning hand tally
var winningHand = {
  stone: 0,
  paper: 0,
  scissors: 0,
};
console.log("winning tally");
console.log(winningHand);

var setUserName = function (input) {
  if (gameMode == "waiting for username") {
    if (input.trim().length == 0) {
      return "- Please enter a valid username";
    }
    userName = input;
    gameMode = "game started";
    document.querySelector(
      "#user-wins"
    ).innerHTML = `${userName}: ${leaderBoard["You"]}`;
    // submitButton.disabled = true;
    // userNameField.value = "";
    document.querySelector("#username-input").style.display = "none";
    return userName;
  }
};

var main = function (playerChoice, reverse = false, computerMode = false) {
  if (reverse == false && computerMode == false) {
    var finalResult = getResultComparison(playerChoice);
    console.log(finalResult);
    return finalResult;
  }
  if (reverse == true && computerMode == false) {
    var reverseFinalResult = getReverseResultComparison(playerChoice);
    console.log(reverseFinalResult);
    return reverseFinalResult;
  }
  if (reverse == false && computerMode == true) {
    var reverseFinalResult = getComputerResultComparison(playerChoice);
    console.log(reverseFinalResult);
    return reverseFinalResult;
  }
  if (reverse == true && computerMode == true) {
    var reverseFinalResult = getReverseComputerResultComparison(playerChoice);
    console.log(reverseFinalResult);
    return reverseFinalResult;
  }
};

// Normal mode, user vs random
var getResultComparison = function (playerChoice) {
  var computerChoice = getComputerChoice();
  if (!things.includes(playerChoice)) {
    return "Your input is not valid, please try again!";
  }
  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> It is draw! 
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}. 
    <br> You win!
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[1] && playerChoice === things[0]) ||
    (computerChoice === things[2] && playerChoice === things[1]) ||
    (computerChoice === things[0] && playerChoice === things[2])
  ) {
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};

// Reverse mode, user vs random
var getReverseResultComparison = function (playerChoice) {
  var computerChoice = getComputerChoice();

  if (!things.includes(playerChoice)) {
    return "Your input is not valid, please try again!";
  }

  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> It is draw! 
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[1] && playerChoice === things[0]) ||
    (computerChoice === things[2] && playerChoice === things[1]) ||
    (computerChoice === things[0] && playerChoice === things[2])
  ) {
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}. 
    <br> You win!
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};

// Computer mode, random vs ramdom
var getComputerResultComparison = function () {
  var computerChoice = getComputerChoice();
  var playerChoice = getComputerChoice();

  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> It is draw! 
    <br> Now you can click 🤖 to play another round!`;
  }

  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> Computer chose ${playerChoice} ${pic[playerChoice]} for you. 
    <br> You win!
    <br> Now you can click 🤖 to play another round!`;
  }

  if (
    (computerChoice === things[1] && playerChoice === things[0]) ||
    (computerChoice === things[2] && playerChoice === things[1]) ||
    (computerChoice === things[0] && playerChoice === things[2])
  ) {
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> You lose! Bummer.  
    <br> Now you can click 🤖 to play another round!`;
  }
};
// Computer reverse mode, random vs random
var getReverseComputerResultComparison = function () {
  var computerChoice = getComputerChoice();
  var playerChoice = getComputerChoice();

  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> It is draw! 
    <br> Now you can click 🤖 to play another round!`;
  }

  if (
    (computerChoice === things[1] && playerChoice === things[0]) ||
    (computerChoice === things[2] && playerChoice === things[1]) ||
    (computerChoice === things[0] && playerChoice === things[2])
  ) {
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> Computer chose ${playerChoice} ${pic[playerChoice]} for you. 
    <br> You win!
    <br> Now you can click 🤖 to play another round!`;
  }

  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated winning tally");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> You lose! Bummer.  
    <br> Now you can click 🤖 to play another round!`;
  }
};

// Generate random scissors/paper/stone
var getComputerChoice = function () {
  var thing = things[Math.floor(Math.random() * things.length)];
  console.log("Computer chose:");
  console.log(thing);
  return thing;
};

// Update leaderboard
var updateLeaderboard = function (leaderBoard, winner) {
  leaderBoard[winner] += 1;
  var youScore = document.querySelector("#user-wins");
  var computerScore = document.querySelector("#computer-wins");
  youScore.innerHTML = `${userName}: ${leaderBoard["You"]}`;
  computerScore.innerHTML = `Computer: ${leaderBoard["Computer"]}`;
};

// Update winning hand tally
var updateWinningHand = function (winningHand, hand) {
  winningHand[hand] += 1;
  var scissorsScore = document.querySelector("#scissors");
  var paperScore = document.querySelector("#paper");
  var stoneScore = document.querySelector("#stone");
  scissorsScore.innerHTML = `${pic["scissors"]}: ${winningHand["scissors"]}`;
  paperScore.innerHTML = `${pic["paper"]}: ${winningHand["paper"]}`;
  stoneScore.innerHTML = `${pic["stone"]}: ${winningHand["stone"]}`;
};
