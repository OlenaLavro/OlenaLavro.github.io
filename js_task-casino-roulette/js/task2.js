const MIN_RANGE = 0;
const INITIAL_MAX_RANGE = 8;
const MAX_AMOUNT_OF_ATTEMPS = 3;
const PRIZE_FOR_1_ATTEMP = 100;
const PRIZE_FOR_2_ATTEMP = 50;
const PRIZE_FOR_3_ATTEMP = 25;
const STEP_FOR_MAX_RANGE = 4;
const MULTIPLIER_FOR_PRIZES = 2;

function startNewGame(message) {
    if (confirm(message)) {
        playGame(0, INITIAL_MAX_RANGE, [PRIZE_FOR_1_ATTEMP,PRIZE_FOR_2_ATTEMP,PRIZE_FOR_3_ATTEMP]);
    } else {
        alert('You did not become a billionaire, but can.');
    }
}

function playGame(sumOfUserPrize, maxRange, possiblePrizes) {
    let randomNumber = generateRandomIntNumberInRange(MIN_RANGE, maxRange);
    let currentAmountOfAttemps = MAX_AMOUNT_OF_ATTEMPS;
    let guessNumber;

    while (currentAmountOfAttemps > 0) {
        guessNumber = enterAndValidateGuessNumber(maxRange, currentAmountOfAttemps, sumOfUserPrize, possiblePrizes);
        if (randomNumber === guessNumber) {
            sumOfUserPrize += possiblePrizes[MAX_AMOUNT_OF_ATTEMPS - currentAmountOfAttemps];
            displayPrize('Congratulation, you won!', sumOfUserPrize);

            if (confirm('Do you want to continue?')) {
                return playGame(sumOfUserPrize, maxRange + STEP_FOR_MAX_RANGE, possiblePrizes.map(function (item) {
                    return item * MULTIPLIER_FOR_PRIZES;
                }));
            } else {
                break;
            }
        }
        currentAmountOfAttemps--;
    }
    displayPrize('Thank you for your participation.', sumOfUserPrize);
    return startNewGame(`Do you want to play again?`);
}

function enterAndValidateGuessNumber(maxRange, currentAmountOfAttemps, sumOfUserPrize, possiblePrizes) {
    let guessNumber;
    do {
        guessNumber = Number(prompt(`Choose  a roulette pocket number from ${MIN_RANGE} to ${maxRange} \n
    Attemps left: ${currentAmountOfAttemps} \n
    Total prize: ${sumOfUserPrize} \n
    Possible prize on current attempt: ${possiblePrizes[MAX_AMOUNT_OF_ATTEMPS - currentAmountOfAttemps]}$ \n
    `));
    } while (isNaN(guessNumber) || guessNumber < MIN_RANGE || guessNumber > maxRange);
    return guessNumber;
}

function displayPrize(messageForLossOrWin, sumOfUserPrize) {
    alert(`${messageForLossOrWin} Your prize is: ${sumOfUserPrize}`);
}

function generateRandomIntNumberInRange(min, max) {
    return Math.floor(Math.random() * max + min);
}

startNewGame('Do you want to play a game?');

