// Step 1, 2, 3, 4
var getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
        return userInput;
    } else {
        console.log ("Error: Invalid input");
    };
};

// Step 5, 6
var getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return getComputerChoice = 'rock';
    } else if (randomNumber === 1) {
        return getComputerChoice = 'paper';
    } else if (randomNumber === 2) {
        return getComputerChoice = 'scissors';
    };
};

// Step 7, 8, 9, 10, 11
var determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Game tied. Shake again!";
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "The computer won :/";
        } else {
            return "You win!";
        };
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "The computer won :/";
        } else {
            return "You win!";
        };
    };
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "The computer won :/";
        } else {
            return "You win!";
        };
    };
    if (userChoice === 'bomb') {
        return "You win!";
    }
};



// Step 12, 13, 14
var playGame = () => {
    userChoice = getUserChoice('rock', 'paper', 'scissors', 'bomb');
    computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
