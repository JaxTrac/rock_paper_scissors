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
    
    // scissors vs paper -> scissors wins
}

playRound("Rock", getComputerChoice())