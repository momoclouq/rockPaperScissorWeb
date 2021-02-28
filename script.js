const moves = ["rock", "paper", "scissor"];

//generate a random computer move
function computerPlay(){
    //randomly get a number between 0 and 2 -> access the moves for the next computer move
    return moves[parseInt(Math.random() * moves.length)];
}

//deciding the result
function playRound(playerSelection, computerSelection){
    //turn the player's move to lower case
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "Draw! " + playerSelection + " equals " + computerSelection;
    } else {
        switch (playerSelection){
            case "rock":
                if (computerSelection === "paper") return "You lose! " + computerSelection + " beats " + playerSelection; 
                if (computerSelection === "scissor") return "You win! " + playerSelection + " beats " + computerSelection; 
                break;
            case "paper":
                if (computerSelection === "rock") return "You win! " + playerSelection + " beats " + computerSelection; 
                if (computerSelection === "scissor") return "You lose! " + computerSelection + " beats " + playerSelection; 
                break;
            case "scissor":
                if (computerSelection === "paper") return "You win! " + playerSelection + " beats " + computerSelection; 
                if (computerSelection === "rock") return "You win! " + computerSelection + " beats " + playerSelection; 
                break;
        }
    }

    return "What the hell";
}

//testing
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerPlay()));