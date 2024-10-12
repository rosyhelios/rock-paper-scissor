const rockb=document.getElementById('rock');
const paperb=document.getElementById('paper');
const scissorb=document.getElementById('scissor');
const resultdiv=document.getElementById('result');
const scorediv=document.getElementById('score');
const resetb=document.getElementById('reset');

let playerScore=0;
let computerScore=0;

function getComputerChoice(){
  const choices=['rock','paper','scissor'];
  return choices[Math.floor(Math.random()*choices.length)];
}

function determineWinner(playerSelect,computerSelect)
{
  if(playerSelect===computerSelect){
    return 'tie';
  }else if(playerSelect==='rock'&&computerSelect==='scissor'||playerSelect==='paper'&&computerSelect==='rock'||playerSelect==='scissor'&&computerSelect==='paper'){
    return 'player wins!';
  }else{
    return 'computer wins!'; 
  }
}

function playRound(playerSelect){
  const computerSelect=getComputerChoice();
  const winner=determineWinner(playerSelect,computerSelect);
  resultdiv.textContent=`Player chose ${playerSelect} , computer chose ${computerSelect}`;
  if(winner==='player wins!'){
    playerScore++;
  }else if(winner==='computer wins!'){
    computerScore++;
  }
  scorediv.textContent=`score: player:-${playerScore}
                               computer:-${computerScore}`;
  if(playerScore===5||computerScore===5){
    declarewinner();
  }                              
}
function resetnow(){
  playerScore= 0;
  computerScore=0;
  resultdiv.textContent=' ';
  scorediv.textContent=' ';
  resetb.style.display='none';

}
function declarewinner(){
  if(playerScore===5){
    alert("player won");
    resultdiv.textContent='player wins the game'
  }
  else {
    alert("player lost");
    resultdiv.textContent="computer wins the game";
  }
  resetb.style.display='block';
}

rockb.addEventListener('click',()=>playRound('rock'));
paperb.addEventListener('click',()=>playRound('paper'));
scissorb.addEventListener('click',()=>playRound('scissor'));
resetb.addEventListener('click',resetnow);