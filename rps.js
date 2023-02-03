let userChoiceSelection = "";
let computerChoiceSelection = "";

let rockButton     = document.getElementById("rock");
let paperButton    = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    userChoiceSelection = rockButton.value;
    displayAllChoices();
});
paperButton.addEventListener("click", function() {
    userChoiceSelection = paperButton.value;
    displayAllChoices();
});
scissorsButton.addEventListener("click", function() {
    userChoiceSelection = scissorsButton.value;
    displayAllChoices();
});


function displayUserChoice() {
    document.getElementById("user_choice").innerHTML = userChoiceSelection;
}


function displayComputerChoice() {
    let choices = ['rock','paper','scissors'];
    let computerRandChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer_choice").innerHTML = computerRandChoice;

    computerChoiceSelection = computerRandChoice;
}

function displayWinner() {
    let gameResultElement = document.getElementById("winner");
    if (computerChoiceSelection === userChoiceSelection) {
        gameResultElement.innerHTML = "It's a tie!";
        return;
    } 

    if (userChoiceSelection === "rock") {
        switch(computerChoiceSelection) {
            case "paper":
                gameResultElement.innerHTML = "Computer Won!";
                break;
            case "scissors":
                gameResultElement.innerHTML = "User Won!";
                break;
        }
    }
    else if (userChoiceSelection === "paper") {
        switch(computerChoiceSelection) {
            case "scissors":
                gameResultElement.innerHTML = "Computer Won!";
                break;
            case "rock":
                gameResultElement.innerHTML = "User Won!";
                break;
        }
    }
    else if (userChoiceSelection === "scissors") {
        switch(computerChoiceSelection) {
            case "rock":
                gameResultElement.innerHTML = "Computer Won!";
                break;
            case "paper":
                gameResultElement.innerHTML = "User won!";
                break;
        }
    }
}

function displayAllChoices() {
    displayUserChoice();
    displayComputerChoice();
    displayWinner();
}
