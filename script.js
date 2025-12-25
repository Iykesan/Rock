function getComputerChoice(){
    let number = Math.floor(Math.random()* 3) + 1
    if(number === 1){
        return "rock"
    }else if(number === 2){
        return "scissors"
    }else return "paper"
}

const choices = document.querySelector("#Choices")
const rock = document.querySelector("#Rock")
const paper = document.querySelector("#Paper")
const scissors = document.querySelector("#Scissors")

rock.addEventListener('click', (event)=> {
    let humanChoice = event.target.value
    playRound(humanChoice)
})
paper.addEventListener('click', (event)=> {
    let humanChoice = event.target.value
    playRound(humanChoice)
})
scissors.addEventListener('click', (event)=> {
    let humanChoice = event.target.value
    playRound(humanChoice)
})

const result = document.querySelector("#results")
const score = document.querySelector("#scores")
const computer = document.querySelector("#Computer")
const human = document.querySelector("#Human")

let humanScore = 0
let humScore = document.createElement("span")
humScore.textContent = `${humanScore}`
human.appendChild(humScore)

let computerScore = 0   
let compScore = document.createElement("span")
compScore.textContent = `${computerScore}`
computer.appendChild(compScore)

function playRound(humanSelection){
    let computerSelection = getComputerChoice()  

    const winner = document.createElement("p")
    const comp = document.createElement("p")
    comp.textContent = `Computer choice: ${computerSelection}`
    result.appendChild(comp)
    const hum = document.createElement("p")
    hum.textContent = `Player choice: ${humanSelection}`
    result.appendChild(hum)

    if(humanSelection === computerSelection){
        const winner = document.createElement("p")
        winner.textContent = `no one wins!`
        result.appendChild(winner)
    }else if(computerSelection === "rock" && humanSelection === "scissors"){
        const winner = document.createElement("p")
        winner.textContent = `Rock beats Scissors! Computer Wins!`
        result.appendChild(winner)
        computerScore++
    }else if(computerSelection === "rock" && humanSelection === "paper"){
        const winner = document.createElement("p")
        winner.textContent = `paper beats rock! Player wins`
        result.appendChild(winner)
        humanScore++
    }else if(computerSelection === "scissors" && humanSelection === "rock"){
        const winner = document.createElement("p")
        winner.textContent = `rock beats scissors! Player wins`
        result.appendChild(winner)
        humanScore++
    }else if(computerSelection === "scissors" && humanSelection === "paper"){
        const winner = document.createElement("p")
        winner.textContent = `cissors beats paper! Computer wins`
        result.appendChild(winner)
        computerScore++
    }else if(computerSelection === "paper" && humanSelection === "rock"){
        const winner = document.createElement("p")
        winner.textContent = "paper beats rock! Computer wins"
        result.appendChild(winner)
        computerScore++
    }else{
        const winner = document.createElement("p")
        winner.textContent = `scissors beats paper! Player wins`
        result.appendChild(winner)
        humanScore++
    }

    if(computerScore === 5){
        const win = document.createElement("p")
        win.textContent = `Winner: COMPUTER `
        score.appendChild(win)
    }else if(humanScore === 5 ){
        const win = document.createElement("p")
        win.textContent = `Winner: HUMAN`
        score.appendChild(win)
    }
    console.log(computerScore)
    console.log(humanScore)

    human.removeChild(humScore)
    humScore.textContent = `${humanScore}`
    human.appendChild(humScore)
    computer.removeChild(compScore)
    compScore.textContent = `${computerScore}`
    computer.appendChild(compScore)

}



//console.log(playGame())