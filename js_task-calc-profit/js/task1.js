const ONE_HUNDRED_PERCENTS = 100;
const ONE_YEAR =1;
const MIN_INITIAL_MONEY_AMOUNT = 1000;
const MAX_DIGITS_AFTER_COMMA = 2;

function enterInitialValues() {
    let initialMoneyAmount = Number(prompt('Please, input initial amount of money'));
    let numberOfYears = Number(prompt('Please, input number of years'));
    let percentageOfYear = Number(prompt('Please, input percentage of a year'));
    validateInput(initialMoneyAmount, numberOfYears, percentageOfYear);
}

function validateInput(initialMoneyAmount, numberOfYears, percentageOfYear) {
    if (isNaN(initialMoneyAmount) || isNaN(numberOfYears) || isNaN(percentageOfYear)
        || initialMoneyAmount < MIN_INITIAL_MONEY_AMOUNT || numberOfYears < ONE_YEAR 
        || percentageOfYear > ONE_HUNDRED_PERCENTS ) {
        alert('Invalid input data');
    } else {
        calculateProfitAndAmount(initialMoneyAmount, numberOfYears, percentageOfYear);
    }
}

function calculateProfitAndAmount(initialMoneyAmount, numberOfYears, percentageOfYear) {
    let profit = 0;
    let amount = initialMoneyAmount;
    numberOfYears = parseInt(numberOfYears);

    for (let i = 0; i < numberOfYears; i++) {
        profit += amount * percentageOfYear / ONE_HUNDRED_PERCENTS;
        amount = initialMoneyAmount + profit;
    }
    showResultMessage(initialMoneyAmount, numberOfYears, percentageOfYear, profit, amount);
}

function showResultMessage(initialMoneyAmount, numberOfYears, percentageOfYear, profit, amount) {
    alert(`Initial amout: ${initialMoneyAmount} \n
    Number of years: ${numberOfYears} \n 
    Percentage of year: ${percentageOfYear} \n\n
    Total profit: ${profit.toFixed(MAX_DIGITS_AFTER_COMMA)} \n 
    Total amount: ${amount.toFixed(MAX_DIGITS_AFTER_COMMA)}`);
}

enterInitialValues();