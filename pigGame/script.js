//selecting elements 
//selectate prin clasa
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//selectate prin id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnNew.addEventListener('click', function () {
    playing = true;
    
    if (activePlayer === 1) 
        player1El.classList.remove('player--winner');
    else player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
})

btnRoll.addEventListener('click', function () {
    if (playing) {
        //1generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //2display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3check for rolled1
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore;
        } else switchPlayer();
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        //1add current score to active player's score
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2 check if the score is >=100
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
        } else switchPlayer();
    }
})

//toggle => adauga clasa daca nu este, sau o inlatura daca este