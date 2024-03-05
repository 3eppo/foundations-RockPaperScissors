console.log("Hallo Welt");


function getComputerChoice(min,max){
    return getChoice(Math.floor(Math.random()*( max-min +1) + min)); //incl. min + max
}

function getChoice(choice) {
    switch(choice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3: 
            return "Scissor";

    }
}




function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Rock" ||
       playerSelection.toUpperCase()==="PAPER" && computerSelection==="Paper" || 
       playerSelection.toUpperCase()==="SCISSOR" && computerSelection==="Scissor"){
        return "Tie";
       } else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Paper"){
        return "You Lose! Paper beats Rock";
       } else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Scissor"){
        return "You Win! Rock beats Scissor";
       } else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Rock"){
        return "You Win! Paper beats Rock";
       } else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Scissor"){
        return "You Lose! Scissor beats Paper";
       } else if(playerSelection.toUpperCase()==="SCISSOR" && computerSelection==="Rock"){
        return "You Lose! Rock beats Scissor";
       } else if(playerSelection.toUpperCase()==="SCISSOR" && computerSelection==="Paper"){
        return "You Win! Scissor beats Paper";
       } else {
        return "DA PASST WAS NICHT";
       }
}

console.log("Wir spielen 5 Runden: wähle Rock, Paper oder Scissor");

for(let i = 0; i<5; i++){
    
    let check = false;
    let playerSelection;

    while (check === false){
        playerSelection = prompt("Enter your Choice","Rock");
        
        if(playerSelection.toUpperCase() === "ROCK" ||
           playerSelection.toUpperCase() === "PAPER" ||
           playerSelection.toUpperCase() === "SCISSOR" ){
            check =true;
        }else {
            console.log("Du musst Rock, Paper oder Scissor wählen");
        }
    }
    
    let computerSelection = getComputerChoice(1,3);
    console.log(playRound(playerSelection,computerSelection));
    
}
console.log("Das Spiel ist vorbei.");