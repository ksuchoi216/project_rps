let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerSelection = "input";
let computerSelection = "input";
let rounds = 1;
let computerScore = 0;
let playerScore = 0;
let roundResult = 'None';

function computerInput(){
    let random_num = Math.floor(Math.random()*3);
    let randomselection = 'randomselection';
    // document.getElementById("test_res").innerHTML = random_num;

    switch (random_num){
        case 0:
            randomselection = 'rock';
            break;
        case 1:
            randomselection = 'paper';
            break;
        case 2:
            randomselection = 'scissors';
            break;
        default:
            randomselection = 'error'
            break;
    }
    // document.getElementById("final_res").innerHTML = randomselection
    return randomselection
}
function finalResult(playerScore, computerScore){
    let final_res = "None"
    if (playerScore>computerScore){
        final_res = "Player Win!!! "+"Player Score: "+playerScore+" Compuer Score: "+computerScore;
    }
    else if (playerScore<computerScore){
        final_res = "Player Lose!!! "+"Player Score: "+playerScore+" Compuer Score: "+computerScore;
    }
    else {
        final_res = "Draw!!! "+"Player Score: "+playerScore+" Compuer Score: "+computerScore;
    }

    return final_res
}

function playRound(playerinput){
    let status = "This is "+String(rounds)+" round";
    document.getElementById("status").innerHTML = status;

    playerSelection = playerinput;
    computerSelection = computerInput();
    print_location = "res"+String(rounds);
    if (playerSelection===computerSelection){
        roundResult = 'draw';
    }
    else if((playerSelection==="rock" && computerSelection==="paper") 
    || (playerSelection==="paper" && computerSelection==="scissors")
    || (playerSelection==="scissors" && computerSelection==="rock")){
        roundResult = 'lose';
        computerScore += 1;
    }
    else if((playerSelection==="rock" && computerSelection==="scissors") 
    || (playerSelection==="paper" && computerSelection==="rock")
    || (playerSelection==="scissors" && computerSelection==="paper")){
        roundResult = 'win';
        playerScore += 1;
    }

    if (rounds>5){
        document.getElementById("final_res").innerHTML = finalResult(playerScore, computerScore);
    }
    else{
        document.getElementById(print_location).innerHTML =roundResult+" - You chose "+playerSelection+", and computer chose "+computerSelection;
    }
    


    rounds += 1;
}

