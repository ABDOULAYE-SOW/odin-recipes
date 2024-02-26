    const Rock = 'rock';
    const Paper = 'paper';
    const Scissors = 'scissors';
function getComputerChoice(){
    const choices = [Rock, Paper, Scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return 'C\'est un match nul !';
    }else if(
        (playerSelection == Rock && computerSelection == Scissors) ||  
        (playerSelection == Scissors && computerSelection == Paper) ||  
        (playerSelection == Paper && computerSelection == Rock)  
      ){
          return 'Vous avez gagné ce tour !';
      } else {
          return 'Vous avez perdu ce tour';
    
   }
   

}
document.getElementById('rock').addEventListener('click', () =>{
  const playerSelection= Rock;
  const computerSelection=getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerText = result;
});

document.getElementById('paper').addEventListener('click', ()=>{
  const playerSelection=Paper;
  const computerSelection=getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerText = result;
});
document.getElementById('scissors').addEventListener('click', ()=>{
  const playerSelection=Scissors;
  const computerSelection=getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerText = result;
});