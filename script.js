//create function which randomly chooses between RPS

//function with no parameter
function getComputerChoice(){    
    //create variable which stores random number between 0-2
    let random_num = Math.floor(Math.random()*3);
    console.log(random_num)
    //if 0 return Rock
    //if 1 return Paper
    //if 2 return Scissors
}

getComputerChoice()