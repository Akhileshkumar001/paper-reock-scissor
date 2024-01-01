

let computerScore = 0;
let yourScore = 0;

function playGame(yourChoice) {
    const computerChoice = generateComputerChoice();
    const result = getResult(yourChoice, computerChoice);

    displayResult(result, computerChoice);

    // Update scores
    if (result === 'win') {
        yourScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    updateScoreDisplay();
}

function generateComputerChoice() {
    const choices = ['stone', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(yourChoice, computerChoice) {
    if (yourChoice === computerChoice) {
        return 'draw';
    } else if (
        (yourChoice === 'stone' && computerChoice === 'scissor') ||
        (yourChoice === 'paper' && computerChoice === 'stone') ||
        (yourChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResult(result, computerChoice) {
    const resultMessage = document.querySelector('.result-message p');
    resultMessage.textContent = getResultMessage(result, computerChoice);

   
    if (result === 'win') {
        showCelebrationAnimation();
    }
}

function getResultMessage(result, computerChoice) {
    if (result === 'draw') {
        return 'It\'s a draw!';
    } else if (result === 'win') {
        return `You win! ${capitalizeFirstLetter(computerChoice)} is defeated by ${capitalizeFirstLetter(yourChoice)}.`;
    } else {
        return `You lose! ${capitalizeFirstLetter(yourChoice)} is defeated by ${capitalizeFirstLetter(computerChoice)}.`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function updateScoreDisplay() {
    const computerScoreDisplay = document.querySelector('.computer-score');
    const yourScoreDisplay = document.querySelector('.your-score');

    computerScoreDisplay.textContent = computerScore;
    yourScoreDisplay.textContent = yourScore;
}

function resetGame() {
    computerScore = 0;
    yourScore = 0;
    updateScoreDisplay();

}

function openRules() {
    const rulesPopup = document.querySelector('.rules-popup');
    rulesPopup.style.display = 'block';
}

function closeRules() {
    const rulesPopup = document.querySelector('.rules-popup');
    rulesPopup.style.display = 'none';
}


const optionButtons = document.querySelectorAll('.options button');
optionButtons.forEach(button => {
    button.addEventListener('click', function () {
        playGame(button.textContent.toLowerCase()); 
    });
});

const rulesButton = document.querySelector('.rules-section button');
rulesButton.addEventListener('click', openRules);

const closeRulesButton = document.querySelector('.rules-popup button');
closeRulesButton.addEventListener('click', closeRules);
