function getComputerChoice(){
    let number = Math.floor(Math.random()* 3) + 1
    if(number === 1){
        return "rock"
    }else if(number === 2){
        return "scissors"
    }else return "paper"
}

function getHumanChoice(){
    let hand = prompt("Pick between rock, paper, or scissors: ")
    let newHand = hand.toLowerCase()
    return newHand
}

let humanScore = 0
let computerScore = 0   

function playRound(){
    let computerSelection = getComputerChoice()
    let humanSelection = getHumanChoice()

    console.log("computer choice:", computerSelection);
    console.log("hunan choice:", humanSelection);

    if(humanSelection === computerSelection){
        console.log("no one wins!")
    }else if(computerSelection === "rock" && humanSelection === "scissors"){
        console.log("rock beats scissors! Computer wins")
        computerScore++
    }else if(computerSelection === "rock" && humanSelection === "paper"){
        console.log("paper beats rock! Player wins")
        humanScore++
    }else if(computerSelection === "scissors" && humanSelection === "rock"){
        console.log("rock beats scissors! Player wins")
        humanScore++
    }else if(computerSelection === "scissors" && humanSelection === "paper"){
        console.log("scissors beats paper! Computer wins")
        computerScore++
    }else if(computerSelection === "paper" && humanSelection === "rock"){
        console.log("paper beats rock! Computer wins")
        computerScore++
    }else{
        console.log("scissors beats paper! Player wins")
        humanScore++
    }
}


function playGame(){

    for (i = 0; i < 5; i++){
        playRound()
    }    

    if(humanScore < computerScore){
        return "Winner: Computer"
    }else if(humanScore > computerScore){
        return "Winner: Humanr"
    }else{
        return "Draw"
    }
}

console.log(playGame())