/* START TASK 1: Your code goes here */
let task1 = document.querySelector('#task1');
let table = task1.querySelector('table');
let arrayOfTableCells = table.querySelectorAll('td');
const NAME_OF_SPECIAL_CELL = 'Speciall Cell';
const TAGNAME_OF_TABLE_CELL = 'TD';
const INDEX_OF_FIRST_CELL_IN_COL = 0;
const INDEX_OF_SECOND_CELL_IN_COL = 3;
const INDEX_OF_THIRD_CELL_IN_COL = 6;
const DIVIVE_BY_HALF = 2;
const AMOUNT_OF_MSEC = 3000;

table.addEventListener('click', function (event) {

    if (event.target.innerHTML === NAME_OF_SPECIAL_CELL) {
        event.target.closest('table').classList.toggle('green');
        event.target.classList.toggle('yellow');
    } else if (event.target === arrayOfTableCells[INDEX_OF_FIRST_CELL_IN_COL] ||
        event.target === arrayOfTableCells[INDEX_OF_SECOND_CELL_IN_COL]
        || event.target === arrayOfTableCells[INDEX_OF_THIRD_CELL_IN_COL]) {
        event.target.closest('tr').classList.toggle('blue');
    } else if (event.target.tagName === TAGNAME_OF_TABLE_CELL) {
        event.target.classList.toggle('yellow');
    }

})
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let task2 = document.querySelector('#task2');
let inputPhoneNumber = task2.querySelector('#phoneNumber');
let sendButton = task2.querySelector('#sendButton');
let regExp = /^\+380\d{9}$/;
let errorMsg = task2.querySelector('#errorMsg');
let successMsg = task2.querySelector('#successMsg');

inputPhoneNumber.addEventListener('input', function () {
    if (!regExp.test(inputPhoneNumber.value)) {
        errorMsg.classList.add('showMsg');
        inputPhoneNumber.classList.add('errorBorder')
    } else {
        errorMsg.classList.remove('showMsg');
        inputPhoneNumber.classList.remove('errorBorder');
        sendButton.disabled = false;
    }
})

sendButton.addEventListener('click', function () {
    successMsg.classList.add('showMsg');
})
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let task3 = document.querySelector('#task3');
let baskCourt = task3.querySelector('#baskCourt');
let ball = task3.querySelector('#ball');
let displayTeamScore = task3.querySelector('#displayTeamScore');
let scoreTeamA = task3.querySelector('#scoreA');
let scoreTeamB = task3.querySelector('#scoreB');
let amountScoreTeamA = 0;
let amountScoreTeamB = 0;

baskCourt.addEventListener('click', function (event) {
    let courtCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - courtCoords.top - baskCourt.clientTop,
        left: event.clientX - courtCoords.left - baskCourt.clientLeft
    };

    if (ballCoords.top < ball.clientHeight / DIVIVE_BY_HALF) {
        ballCoords.top = ball.clientHeight / DIVIVE_BY_HALF;
    }

    if (ballCoords.left < ball.clientWidth / DIVIVE_BY_HALF) {
        ballCoords.left = ball.clientWidth / DIVIVE_BY_HALF;
    }

    if (ballCoords.left + ball.clientWidth > baskCourt.clientWidth) {
        ballCoords.left = baskCourt.clientWidth - ball.clientWidth / DIVIVE_BY_HALF;
    }

    if (ballCoords.top + ball.clientHeight > baskCourt.clientHeight) {
        ballCoords.top = baskCourt.clientHeight - ball.clientHeight / DIVIVE_BY_HALF;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

    if (event.target.id === 'baskHoopA') {
        dispatchAndHandleEvent(event.target, 'A', 'blue');
        amountScoreTeamA = addScore('A', scoreTeamA, amountScoreTeamA);
    }

    if (event.target.id === 'baskHoopB') {
        dispatchAndHandleEvent(event.target, 'B', 'red');
        amountScoreTeamB = addScore('B', scoreTeamB, amountScoreTeamB);
    }
})

function dispatchAndHandleEvent(basket, team, color) {
    basket.addEventListener('displayScore', function (event) {
        displayTeamScore.style.color = event.detail.color;
        displayTeamScore.innerHTML = event.detail.msg;
        setTimeout(function () {
             displayTeamScore.innerHTML = ''
        }, AMOUNT_OF_MSEC);
    });
    basket.dispatchEvent(new CustomEvent('displayScore', { detail: { msg: `Team ${team} score!`, color: color } }));
}

function addScore(teamName, scoreTeam, amountScoreTeam) {
    scoreTeam.innerHTML = `Team ${teamName}:${++amountScoreTeam} `;
    return amountScoreTeam;
}

/* END TASK 3 */
