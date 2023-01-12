//create function which randomly chooses between RPS

//function with no parameter
function getComputerChoice(){    
    //create variable which stores random number between 0-2
    let random_num = Math.floor(Math.random()*3);
    //if random_num = 0 return Rock
    if (random_num==0) {
        return ("Rock");
    //else if random_num = 1 return Paper
    } else if (random_num==1){
        return ("Paper");


    //else if random_num = 2 return Scissors
    } else if (random_num==2){
        return ("Scissors");
    }
}


//function with two parameters player & computer
function playRound(playerSelection, computerSelection){
    //lowercase user input
    lowerPlayerSelection = playerSelection.toLowerCase();
    lowerComputerSelection = computerSelection.toLowerCase();
    // inputs the same -> draw
    if (lowerPlayerSelection==lowerComputerSelection){
        console.log("Draw!");
    }
    
    // rock vs paper -> paper wins
    
    // rock vs scissors -> rock wins
    
    // scissors vs paper -> scissors wins
}

playRound("scissors", getComputerChoice())