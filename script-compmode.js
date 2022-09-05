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
console.log("probability table");
console.log(winningHand);

var setUserName = function (input) {
  if (gameMode == "waiting for username") {
    userName = input;
    gameMode = "normal mode";
    // submitButton.disabled = true;
    // userNameField.value = "";
    document.querySelector("#username-input").style.display = "none";
    // document.querySelector("#submit-button").style.animation = "mynewmove 4s 2";
    return userName;
  }
};

var main = function (playerChoice, reverse = false, computerMode = false) {
  console.log("⭐⭐⭐New Game⭐⭐⭐");
  // console.log("User:");
  // console.log(playerChoice);

  if (reverse == false) {
    var finalResult = getResultComparison(playerChoice);
    console.log("Result:");
    console.log(finalResult);
    return finalResult;
  }
  if (reverse == true) {
    var reverseFinalResult = getReverseResultComparison(playerChoice);
    console.log("Result:");
    console.log(reverseFinalResult);
    return reverseFinalResult;
  }

  // if (computerMode == true) {
  //   var computerFinalResult = getComputerResultComparison();
  //   console.log("Result:");
  //   console.log(computerFinalResult);
  //   return computerFinalResult;
  // }
};

// NORMAL MODE 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎

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
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
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
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};

// REVERSE MODE 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎

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
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
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
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> You chose ${playerChoice} ${pic[playerChoice]}.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};

// COMPUTER MODE 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎

var getComputerResultComparison = function () {
  var computerChoice = getComputerChoice();
  var playerChoice = getComputerChoice();

  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> It is draw! 
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> Computer chose ${playerChoice} ${pic[playerChoice]} for you. 
    <br> You win!
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
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
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};
// COMPUTER REVERSE MODE 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎

var getReverseComputerResultComparison = function () {
  var computerChoice = getComputerChoice();
  var playerChoice = getComputerChoice();

  if (computerChoice === playerChoice) {
    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> It is draw! 
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[1] && playerChoice === things[0]) ||
    (computerChoice === things[2] && playerChoice === things[1]) ||
    (computerChoice === things[0] && playerChoice === things[2])
  ) {
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "You");
    updateWinningHand(winningHand, playerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> Computer chose ${playerChoice} ${pic[playerChoice]} for you. 
    <br> You win!
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }

  if (
    (computerChoice === things[0] && playerChoice === things[1]) ||
    (computerChoice === things[1] && playerChoice === things[2]) ||
    (computerChoice === things[2] && playerChoice === things[0])
  ) {
    // update leaderboard and winning hand tally
    updateLeaderboard(leaderBoard, "Computer");
    updateWinningHand(winningHand, computerChoice);
    console.log("updated leader board");
    console.log(leaderBoard);
    console.log("updated probability table");
    console.log(winningHand);

    return `The computer chose ${computerChoice} ${pic[computerChoice]}. 
    <br> The computer chose ${playerChoice} ${pic[playerChoice]} for you.
    <br> You lose! Bummer.  
    <br> Now you can select 🪨, 🗒 or 🔪 to play another round!`;
  }
};

// COMPUTER CHOICE 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
var getComputerChoice = function () {
  var thing = things[Math.floor(Math.random() * things.length)];
  console.log("Computer:");
  console.log(thing);
  return thing;
};

// Update leaderboard
var updateLeaderboard = function (leaderBoard, winner) {
  leaderBoard[winner] += 1;
  var youScore = document.querySelector("#user_wins");
  var computerScore = document.querySelector("#computer_wins");
  youScore.innerHTML = `You: ${leaderBoard["You"]}`;
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
