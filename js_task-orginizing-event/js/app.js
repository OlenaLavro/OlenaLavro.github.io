const CURRENT_EURO_IN_UAH = 33.01;
const CURRENT_DOLLAR_IN_UAH = 27.77;
const MAX_SIGNS_AFTER_COMMA = 2;

window.onload = function () {
    if (prompt('Please, enter the event name', 'meeting')) {
        document.getElementById('form').classList.add('visible');
    }
}

function getInputValuesFromForm() {
    let name = document.getElementById('name').value;
    let time = document.getElementById('time').value;
    let place = document.getElementById('place').value;

    checkInputValuesFromForm(name, time, place);
}

function checkInputValuesFromForm(name, time, place) {
    let regExpForTime = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;

    if (name.length === 0 || time.length === 0 || place.length === 0) {
        alert('Input all data');
    } else if (!regExpForTime.test(time)) {
        alert('Enter time in format hh:mm');
    } else {
        showMessageAboutMeeting(name, time, place);
    }
}

function showMessageAboutMeeting(name, time, place) {
    console.log(`${name} has meeting today at ${time} somewhere at ${place}`);
}


function getAmountsOfMoney() {
    let amountOfEuros = getPositiveAmountOfMoney('Please, enter amount of euro');
    let amountOfDollars = getPositiveAmountOfMoney('Please, enter amount of dollar');

    convertToUah(amountOfEuros, amountOfDollars);
}

function getPositiveAmountOfMoney(message) {
    let amount;
    do {
        amount = Number(prompt(message));
    } while (amount <= 0);
    return amount;
}

function convertToUah(amountOfEuros, amountOfDollars) {
    let amountOfEurosInUah = (amountOfEuros * CURRENT_EURO_IN_UAH).toFixed(MAX_SIGNS_AFTER_COMMA);
    let amountOfDollarsInUah = (amountOfDollars * CURRENT_DOLLAR_IN_UAH).toFixed(MAX_SIGNS_AFTER_COMMA);

    showConvertedMoney(amountOfEuros, amountOfDollars, amountOfEurosInUah, amountOfDollarsInUah);
}

function showConvertedMoney(amountOfEuros, amountOfDollars, amountOfEurosInUah, amountOfDollarsInUah) {
    alert(amountOfEuros + ' euros are equal ' + amountOfEurosInUah + 'hrns, ' 
    + amountOfDollars + ' dollars are equal ' + amountOfDollarsInUah + 'hrns')
}







