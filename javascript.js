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
        computerScore++;
        return "You Lose! Paper beats Rock";
       } else if(playerSelection.toUpperCase()==="ROCK" && computerSelection==="Scissor"){
        playerScore++;
        return "You Win! Rock beats Scissor";
       } else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Rock"){
        playerScore++;
        return "You Win! Paper beats Rock";
       } else if(playerSelection.toUpperCase()==="PAPER" && computerSelection==="Scissor"){
        computerScore++;
        return "You Lose! Scissor beats Paper";
       } else if(playerSelection.toUpperCase()==="SCISSOR" && computerSelection==="Rock"){
        computerScore++;
        return "You Lose! Rock beats Scissor";
       } else if(playerSelection.toUpperCase()==="SCISSOR" && computerSelection==="Paper"){
        playerScore++;
        return "You Win! Scissor beats Paper";
       } else {
        return "DA PASST WAS NICHT";
       }
}


// Alte Logik nur in Konsole bitch
// ----------------------------------------------
// console.log("Wir spielen 5 Runden: wähle Rock, Paper oder Scissor");

// for(let i = 0; i<5; i++){
    
//     let check = false;
//     let playerSelection;

//     while (check === false){
//         playerSelection = prompt("Enter your Choice","Rock");
        
//         if(playerSelection.toUpperCase() === "ROCK" ||
//            playerSelection.toUpperCase() === "PAPER" ||
//            playerSelection.toUpperCase() === "SCISSOR" ){
//             check =true;
//         }else {
//             console.log("Du musst Rock, Paper oder Scissor wählen");
//         }
//     }
    
//     let computerSelection = getComputerChoice(1,3);
//     console.log(playRound(playerSelection,computerSelection));
    
// }
// console.log("Das Spiel ist vorbei.");
// ----------------------------------------------

const container = document.querySelector('#erg');

let counter = 0;
let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click',() => {
    let computerSelection = getComputerChoice(1,3);
    
    if (counter === 0){
        //clear content
        container.innerHTML='';
        playerScore=0;
        computerScore=0;
    }

    const content = document.createElement('div');
    content.setAttribute('style', 'white-space: pre');
    content.classList.add('content');
    counter ++;
    //5. Runde?
    if (counter <5)    {
        content.textContent = "\r\n" + playRound("ROCK",computerSelection)+
                            "\r\nSpielstand: Spieler:" + playerScore 
                            + " Computer:"+computerScore;
        container.appendChild(content);
    }
    else
    {
        let str=playRound("ROCK",computerSelection);
        if(computerScore>playerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast verloren."
        }
        else if(playerScore>computerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast gewonnen."
        }
        else{
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nUnentschieden."
        }
        container.appendChild(content);
        counter = 0;
    }

    // console.log(playRound("ROCK",computerSelection));
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click',() => {
    let computerSelection = getComputerChoice(1,3);

    if (counter === 0){
        //clear content
        container.innerHTML='';
        playerScore=0;
        computerScore=0;
    }

    const content = document.createElement('div');
    content.setAttribute('style', 'white-space: pre');
    content.classList.add('content');
    counter ++;
    //5. Runde?
    if (counter <5)    {
        content.textContent ="\r\n" + playRound("PAPER",computerSelection) +
                            "\r\nSpielstand: Spieler:" + playerScore 
                            + " Computer:"+computerScore;
        container.appendChild(content);
    }
    else
    {
        let str=playRound("PAPER",computerSelection);
        if(computerScore>playerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast verloren."
        }
        else if(playerScore>computerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast gewonnen."
        }
        else{
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\Spieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nUnentschieden."
        }
        container.appendChild(content);
        counter = 0;
    }

//    console.log(playRound("PAPER",computerSelection));
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click',() => {
    let computerSelection = getComputerChoice(1,3);

    if (counter === 0){
        //clear content
        container.innerHTML='';
        playerScore=0;
        computerScore=0;
    }

    const content = document.createElement('div');
    content.setAttribute('style', 'white-space: pre');
    content.classList.add('content');
    counter ++;
    //5. Runde?
    if (counter <5)    {
        content.textContent = "\r\n" + playRound("SCISSOR",computerSelection) +
                            "\r\nSpielstand: Spieler:" + playerScore +
                            " Computer:"+computerScore;
        container.appendChild(content);
    }
    else
    {
        let str=playRound("SCISSOR",computerSelection);
        if(computerScore>playerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast verloren."
        }
        else if(playerScore>computerScore){
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nDu hast gewonnen."
        }
        else{
            content.textContent="\r\n5 Runden gespielt. Der Endstand lautet:"+ 
                                "\r\nSpieler:" + playerScore +
                                " Computer:"+computerScore +
                                "\r\nUnentschieden."
        }
        container.appendChild(content);
        counter = 0;
    }


    //console.log(playRound("SCISSOR",computerSelection));
})

