const h1 = document.querySelector('h1');


// Calculate random number between 1-6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

const player1 = document.querySelector('.img1');

// Concatenating the random number with the corresponding image for player 1
player1.setAttribute('src', `/images/dice${randomNumber1}.png`);

const player2 = document.querySelector('.img2');

// Concatenating the random number with the corresponding image for player 2
player2.setAttribute('src', `/images/dice${randomNumber2}.png`);

// Dynamically changing h1 element according to who wins the game
h1.textContent =
  randomNumber1 > randomNumber2
    ? (h1.textContent = '🚩 Player 1 wins!')
    : randomNumber2 === randomNumber1
    ? (h1.textContent = 'Draw!')
    : '🚩 Player 2 wins!';
