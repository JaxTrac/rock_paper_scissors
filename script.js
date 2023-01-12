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
    inputLength = (lowerComputerSelection+lowerPlayerSelection).length;
    // inputs the same -> draw
    if (lowerPlayerSelection==lowerComputerSelection){
        console.log("Draw!");

    }
    // rock vs paper -> paper wins
    else if (inputLength==9){
        if (lowerPlayerSelection=="paper"){
            console.log("Paper vs Rock! Paper wins!")
        } else {
            console.log("Rock vs Paper! You loooooose!")
        }
    }
    
    // rock vs scissors -> rock wins
    else if (inputLength==12){
        if (lowerPlayerSelection=="rock"){
            console.log("Rock vs Scissors! Rock wins!")
        } else {
            console.log("Scissors vs Rock! You loooooose!")
        }
    }
    
    // scissors vs paper -> scissors wins
    else if (inputLength==13){
        if (lowerPlayerSelection=="scissors"){
            console.log("Scissors vs Paper! Scissors wins!")
        } else {
            console.log("Paper vs Scissors! You loooooose!")
        }
    }
}

playRound("Rock", getComputerChoice());
playRound("Scissors", getComputerChoice());
playRound("Paper", getComputerChoice());