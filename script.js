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

function game(){
    let yourScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++){
        let result = playRound(prompt("Enter your move"), computerPlay());
        console.log("Round " + (i + 1) + ": " + result);

        if (result.substring(4, 7) === "win") yourScore++;
        else if (result.substring(4,87) === "lose") computerScore++;
    }

    if (yourScore > computerScore) console.log("You win ultimately! " + yourScore + " to " + computerScore);
    else if (yourScore == computerScore) console.log("Draw!!!!");
    else console.log("You lose ultimately! " + computerScore + " to " + yourScore);
}

game();