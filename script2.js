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

function reset(resultString){
    resultFinalDiv.textContent = resultString;
    yourScore = 0;
    computerScore = 0;
}

function updateResult(result){
    resultFinalDiv.textContent = "";
    if (result.substring(4, 7) === "win") yourScore++;
    else if (result.substring(4,8) === "lose") computerScore++;

    resultDiv.textContent = result;

    if (yourScore == 5) reset("You win finally!");
    if (computerScore == 5) reset("You lose hahaha!");
}

let yourScore = 0;
let computerScore = 0;

let btnRock = document.querySelector('#btn-rock');
let btnPaper = document.querySelector('#btn-paper');
let btnScissor = document.querySelector('#btn-scissor');
let resultDiv = document.querySelector("#resultMatch");
let resultFinalDiv = document.querySelector("#resultFinal");

//add event listener to the buttons
btnRock.addEventListener('click', () => {
    let result = playRound("rock", computerPlay());
    updateResult(result);
});

btnPaper.addEventListener('click', () => {
    let result = playRound("paper", computerPlay());
    updateResult(result);
});

btnScissor.addEventListener('click', () => {
    let result = playRound("scissor", computerPlay());
    updateResult(result);
});