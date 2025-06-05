'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const againBtn = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    number = Math.trunc(Math.random() * 20) + 1;
  });

const checkBtn = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayMessage('⛔️ No number!');
    } else if (guess === number) {
      displayMessage('🎉 You got it right!');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = String(highscore);
      }
    } else {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      } else {
        displayMessage('💥 You lose!');
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#bd2c2c';
      }
    }
  });
