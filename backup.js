

// add playGame function that call play round five times


function playGame() 
{
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
            
        playRound(humanSelection, computerSelection);
    }

    // print score
    console.log(`Computer Score: ${computerScore}: Human Score: ${humanScore}`)
    if (computerScore > humanScore)
    {
        console.log("You lose!");
    } else if (humanScore > computerScore)
    {
        console.log("You win!");
    } else 
    {
        console.log("Draw");
    }

}

playGame();