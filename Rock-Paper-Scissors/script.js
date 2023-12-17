const computerChoiceDisplay = document.getElementById('pc-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const posibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoise;

posibleChoices.forEach(posibleChoice => posibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 ) + 1;

  if (randomNumber === 1) computerChoise = 'rock';
  if (randomNumber === 2) computerChoise = 'paper';
  if (randomNumber === 3) computerChoise = 'scissors';

  computerChoiceDisplay.innerHTML = computerChoise;
};