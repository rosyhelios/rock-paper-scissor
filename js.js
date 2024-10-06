console.log('hello world');
let Humanscore=0;
let ComputerScore=0;
const choices=['rock','paper','scissor'];
function getComputerChoice()
{
 
const randomIndex=Math.floor(Math.random()*choices.length);
return choices[randomIndex]
}
function playGame(){
  let continuepl =true;
  while(continuepl)
  {
    const humanChoice=prompt("enter your choice:");
    const computerChoice=getComputerChoice();
    if(humanChoice==='q'||humanChoice==='quit'){
        continuepl=false;
        console.log(`thanks for playing ! 
          final score-    human:${Humanscore}
                          computer:${ComputerScore}`);
          return;
    }
    playRound(humanChoice,computerChoice);
  }
  
}
function playRound(humanChoice,computerChoice)
{
  humanChoice=humanChoice.toLowerCase();
  
  if(!choices.includes(humanChoice)||!choices.includes(computerChoice))
  {
    console.log("invalid choice please try agian");
    return;
  }
  if(humanChoice===computerChoice)
    console.log("it is a tie both lose");
  else if(humanChoice==='rock'&&computerChoice==='scissor'||humanChoice==='scissor'&&computerChoice==='paper'||humanChoice==="paper"&&computerChoice==="rock")  
  {
    console.log(`you win ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice}`);
    Humanscore++;
  }
  else{
    console.log(`you lose ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} loses ${computerChoice}`);
    ComputerScore++;
  }
  console.log(`scores-human:${Humanscore},computer${ComputerScore}`);
}
