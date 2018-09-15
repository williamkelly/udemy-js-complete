/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;

init();

// Dice Roll
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. Random number
    let dice = Math.floor(Math.random() * 6 ) + 1;

    // 2. Display result
    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`;

    // 3. If Dice not 1 update round score
    if (dice !== 1) {

      // if dice and last dice roll are 6 lose total score
      if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        nextPlayer();
      } else {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        lastDice = dice;
      }

    } else {
      nextPlayer();
    }

    
  }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // add current score to total score
    scores[activePlayer] =  scores[activePlayer] + roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    

    console.log(winningScore);
    // winner?
    if (scores[activePlayer] >= winningScore) {
      document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      gamePlaying = false;
    } else {
      // swap to next player
      nextPlayer();
    }
  }
});


document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  lastDice = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  lastDice = 0;
  const getWinningScore = document.getElementById('winning-score').value;
  getWinningScore ? winningScore = getWinningScore : winningScore = 20;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
}