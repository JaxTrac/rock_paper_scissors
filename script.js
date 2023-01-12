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
        return 0
    }
    // rock vs paper -> paper wins
    else if (inputLength==9){
        if (lowerPlayerSelection=="paper"){
            console.log("Paper vs Rock! Paper wins!")
            return 1
        } else {
            console.log("Rock vs Paper! You loooooose!")
            return -1

        }
    }
    
    // rock vs scissors -> rock wins
    else if (inputLength==12){
        if (lowerPlayerSelection=="rock"){
            console.log("Rock vs Scissors! Rock wins!")
            return 1
        } else {
            console.log("Scissors vs Rock! You loooooose!")
            return -1
        }
    }
    
    // scissors vs paper -> scissors wins
    else if (inputLength==13){
        if (lowerPlayerSelection=="scissors"){
            console.log("Scissors vs Paper! Scissors wins!")
            return 1
        } else {
            console.log("Paper vs Scissors! You loooooose!")
            return -1
        }
    }
}

// create game function
function game(){
    let score=0
    //aks for how many rounds & save in variable
    let rounds = parseInt(prompt("How many rounds do you want to play?"));
    //aks player for every round which choice
    while (rounds > 0){
        let choice = prompt("Rock, Paper, Scissors?")
        score += playRound(choice, getComputerChoice())
        rounds -= 1
        console.log(rounds)
    }
    //returns winner
    console.log(score)
}

game()