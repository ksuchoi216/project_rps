let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerSelection = "input"

function playerInput(input){
    document.getElementById("round_res").innerHTML = "input: "+input;
    playerSelection = input
}

