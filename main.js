/*
The following javascript code handles the functionality of rolling dice, determining 
the winner, updating win counts, and allowing the user to edit player 
names. It also provides a restart option to reset the game.
*/

/* 
This function reloads the current webpage, 
effectively refreshing the page and resetting its state.

The reload() method reloads the current document.
The reload() method does the same as the reload 
button in your browser.
*/
function restartDiceGame() {
  /* The location.reload() method is a built-in function 
  in JavaScript that allows you to reload the 
  current webpage or document. */
  location.reload();
}

//These variables keep track of the number of wins for player 1 and player 2, respectively.
let player1Winner = 0;
let player2Winner = 0;

//This function simulates a dice roll and displays the results on the dicegame.html page
function rollTheDice() {
  // Selects the dice images for player 1 and player 2
  let dice1 = document.querySelector(".player1dice-img");
  let dice2 = document.querySelector(".player2dice-img");

  /* Selects the HTML element with the tag <h2> and class "results" in order
  to display the results of the dice roll*/
  let result = document.querySelector("h1");

  result.innerHTML = " ";

  // Generates random numbers for each player's dice roll, by calling the diceGenerator() function.
  let player1Dice = diceGenerator();
  let player2Dice = diceGenerator();

  // Set the source attribute of "dice1" to display the corresponding dice image for player 1
  dice1.setAttribute("src", "diceimages/dice" + player1Dice + ".png");

  // Set the source attribute of "dice2" to display the corresponding dice image for player 2
  dice2.setAttribute("src", "diceimages/dice" + player2Dice + ".png");

  // Determines the winner based on the dice rolls
  if (player1Dice === player2Dice) {
    result.innerHTML = "DRAW!";
  } else if (player1Dice < player2Dice) {
    result.innerHTML = player2 + " WINS!";
    player2Winner++; // Increment player 2's win count
  } else {
    result.innerHTML = player1 + " WINS!";
    player1Winner++; // Increment player 1's win count
  }

  // Update the leaderboard
  updateLeaderboard();
}

let player1 = "Player1";
let player2 = "Player2";

//This function is called when the user wants to edit the names of player 1 and player 2.
function editNames() {
  ///It prompts the user to enter new names for both players using the prompt() method.
  player1 = prompt("Update Player 1 Name: ");
  player2 = prompt("Update Player 2 Name: ");

  /*
If the entered names are valid (length greater than 0), it updates the 
corresponding <p> elements with the new names using document.querySelector().
If the entered names are not valid, it displays an alert message asking the 
user to enter valid names.
  */
  if (player1.length < 1 || player2.length < 1) {
    alert("Please enter valid name");
  }

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

//This function generates a random number between 1 and 6, representing a dice roll.
function diceGenerator() {
  /*It uses Math.floor() to round down the decimal to the nearest whole number ,
  It adds 1 to the rounded number to get a random whole number between 1 and 6.*/
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  //Returns the generated random number.
  return randomNumber;
}

//This function updates the leaderboard with the current win counts for player 1 and player 2.
function updateLeaderboard() {
  //It selects the HTML element with the class "leaderboard" using document.querySelector().
  let leaderboard = document.querySelector(".leaderboard");

  /*It sets the innerHTML of the leaderboard element to a string containing 
  the player names and their respective win counts.
The win counts are obtained from the player1Winner and player2Winner variables.*/
  leaderboard.innerHTML = `<div id="leaderboard-div"><p class="leaderboard-p">${player1} : ${player1Winner} wins</p>
      <p class="leaderboard-p">${player2} : ${player2Winner} wins</p> </div>`;
}
