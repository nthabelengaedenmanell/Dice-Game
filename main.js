/*The following main.js file is for the dice game 
which incorporates various key elements. It establishes clear rules 
and mechanics, allowing users to interact with the game through 
buttons that trigger corresponding actions. */

/* This function reloads the current webpage, 
effectively refreshing the page and resetting its state.*/

/* The reload() method reloads the current document.
The reload() method does the same as the reload 
button in your browser.*/
function restartDiceGame() {
  /* The location.reload() method is a built-in function 
  in JavaScript that allows you to reload the 
  current webpage or document. */
  location.reload();
}

//This function simulates a dice roll and displays the results on the dicegame.html page
function rollTheDice() {
    // Selects the dice images for player 1 and player 2
    let dice1 = document.querySelector(".player1dice-img");
    let dice2 = document.querySelector(".player2dice-img");

    /* Selects the HTML element with the tag <h2> and class "results" in order
    to display the results of the dice roll*/
    let result = document.querySelector('h1');
    
    result.innerHTML = " ";

    // Generates random numbers for each player's dice roll, by calling the diceGenerator() function.
    let player1Dice = diceGenerator();
    let player2Dice = diceGenerator();

    // Set the source attribute of "dice1" to display the corresponding dice image for player 1
    dice1.setAttribute('src', 'diceimages/dice' + player1Dice + '.png');
    // Set the source attribute of "dice2" to display the corresponding dice image for player 2
    dice2.setAttribute('src', 'diceimages/dice' + player2Dice + '.png');

    // Determines the winner based on the dice rolls
    if (player1Dice === player2Dice) {
      result.innerHTML = "DRAW!";
    } else if (player1Dice < player2Dice) {
      result.innerHTML = (player2 + " WINS!"); // Assuming player names are stored in variables player1 and player2
    } else {
      result.innerHTML = (player1 + " WINS!"); // Assuming player names are stored in variables player1 and player2
    }
}

/*Two variables, player1 and player2, are declared and assigned 
to their initial values of "Player1" and "Player2".*/
let player1 = "Player1";
let player2 = "Player2";

/*This function allows the user to update the names 
of player1 and player2 by prompting them to enter new names using 
the prompt() function.*/
function editNames() {

    player1 = prompt("Update Player 1 Name: ");
    player2 = prompt("Update Player 2 Name: ");

    /*The code then performs error management by checking 
    if the length of either player1 or player2 is less than 1 (empty string). 
    If so, it displays an alert message asking the user to enter a valid name.*/
    if(player1.length<1 || player2.length<1){
        alert("Please enter valid name");
    }

/* the code uses the querySelector() method to select the HTML elements 
with class names "Player1" and "Player2" (<p> elements) and 
updates their innerHTML to display the new names entered by the user.*/
    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

/* diceGenerator that generates a random number between 1 and 6, 
simulating the roll of a dice. */
function diceGenerator() {

    //A random whole number between 1 and 6:
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
        //Returns the generated random number.
        return randomNumber;
    }
