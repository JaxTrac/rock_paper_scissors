//create function which randomly chooses between RPS

//function with no parameter
function getComputerChoice(){    
    //create variable which stores random number between 0-2
    let random_num = Math.floor(Math.random()*3);
    //if random_num = 0 return Rock
    if (random_num=0) {
        return ("Rock");
    
    //else if random_num = 1 return Paper
    } else if (random_num=1){
        return ("Paper");
    //else if random_num = 2 return Scissors
    } else if (random_num=2){
        return ("Scissors");
    }
}
