// function 1: get computer choice
// get computer choice which will return rock, paper or scissors    // use math random to get a number from 0 - 2
// match with case with 0 -> rock, 1 -> paper, 2 -> scissors
// return it
function getComputerChoice() {
    // return random number from 0 - 2
    const number = Math.floor(Math.random() * 3);
        
    // match case to return the string
    switch (number) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}
    


// decalre player score and conputer score
// both new variable is set two 0
let humanScore = 0;
let computerScore = 0;

// write logic to paly a single round
// function play round where it will ask for computer and human choice
// human choice is case insensitive (always return rock)
// if rock = rock / paper = paper / scissors = scissors (draw)
// else if C:rock & H:paper (You win! Paper beats Rock) (humanScore += 1)
// else if C:paper & H:rock (You lose! Paper beats Rock) (computerScore += 1)
// else if C:scissors & H:rock (You win! Rock beats scissors) (humanScore += 1)
// else if C:rock & H:scissors (You lose! Rock beats scissors) (conputerScore += 1)
// else if C:paper & H:scissors (You win! Scissors beat paper) (humanScore += 1)
// else if C:scissors & C: paper (You lose! Scissors beat paper) (computerScore += 1)
function playRound(humanChoice, computerChoice)
{
    const list = document.querySelector("ul");
    const listItem = document.createElement("li");
    const listText = document.createElement("span");

    if (computerChoice == humanChoice) 
    {
        listText.textContent = "Draw";
    } else if (computerChoice == "rock" && humanChoice == "paper")
    {
        listText.textContent = "You win! Paper beats Rock";
        humanScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock")
    {
        listText.textContent = "You lose! Paper beats Rock";
        computerScore += 1; 
    } else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        listText.textContent = "You win! Rock beats scissors";
        humanScore +=1;
    } else if (computerChoice == "rock" && humanChoice == "scissors")
    {
        listText.textContent = "You lose! Rock beats scissors";
        computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        listText.textContent = "You win! Scissors beat paper";
        humanScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper")
    {
        listText.textContent = "You lose! Scissors beat paper";
        computerScore += 1;
    } else 
    {
        listText.textContent = "Invalid input. You lose";
        computerScore += 1;
    }

    listItem.appendChild(listText);
    list.appendChild(listItem);
}

// game start when user click on any image
const rockImg = document.querySelector(".rock-gesture");
const paperImg = document.querySelector(".paper-gesture");
const scissorsImg = document.querySelector(".scissors-gesture");

// chaneg score
const humanScoreDiv = document.querySelector(".human-score");
const humanScoreText = document.createElement("span");
humanScoreDiv.appendChild(humanScoreText);

const computerScoreDiv = document.querySelector(".computer-score");
const computerScoreText = document.createElement("span");
computerScoreDiv.appendChild(computerScoreText);


rockImg.addEventListener("click", ()=>{
    playGame("rock")
});

paperImg.addEventListener("click", ()=>{
    playGame("paper")
});

scissorsImg.addEventListener("click", ()=>{
    playGame("scissors")
});


let round = 0;
function playGame(humanSelection) {
    if (round > 4) {
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round += 1;

    // change score
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    if (round == 5) {
        if (computerScore > humanScore)
        {
            window.location.href="lose.html"
        } else if (humanScore > computerScore)
        {
            window.location.href="win.html";
        } else
        {
            window.location.href="draw.html";
        }
    }
}
