

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper or scissors');
  }
}
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';                  
	}
}

//checking who is a winner by comparing userChoice and computerChoice.
const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice === computerChoice){
    return "This game is a tie!";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Sorry, computer won!";
    } else{
      return "Congratulations, you won!";
    }
  }
    if (userChoice=== 'paper'){
      if(computerChoice === 'scissors'){
        return 'Sorry, computer won!';
      }else{
        return "Congratulation, you won!";
      }
    }
  
  	if (userChoice=== 'scissors'){
      if (computerChoice === 'rock'){
        return 'Sorry, computer won!';
      } else {
        return "Congratulations, you won";
      }
    }
  
  if (userChoice==='bomb'){
    return 'Congratulation, you won!';
  }
}
const playGame = ()=>{
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  

  console.log(determineWinner(userChoice, computerChoice));
}

//starting the game
playGame();
