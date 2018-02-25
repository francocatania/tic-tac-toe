const prompt = require('prompt');

console.log('Welcome to Tictactoe -1.0');
console.log('Below you will see the board and a prompt. Enter the number where you will want your symbol to appear in.')

let boardObject = {
  '1': ' ',
  '2': ' ',
  '3': ' ',
  '4': ' ',
  '5': ' ',
  '6': ' ',
  '7': ' ',
  '8': ' ',
  '9': ' ',
}

let printBoard = function() {
  console.log(`
${boardObject['1']} | ${boardObject['2']} | ${boardObject['3']}     1 | 2 | 3
---------     ---------
${boardObject['4']} | ${boardObject['5']} | ${boardObject['6']}     4 | 5 | 6
---------     ---------
${boardObject['7']} | ${boardObject['8']} | ${boardObject['9']}     7 | 8 | 9
`);
}

let isCircleTurn = true;
let consoleTurn = function() {
  if (isCircleTurn) {
    console.log('It is O turn')
  } else {
    console.log('It is X turn')
  }
}

const rounds = 9;
let currentRound = 1;

let newRound = function() {
  printBoard();
  consoleTurn();
  prompt.get('position', function (err, result) {
    let choice = result.position;
    if (boardObject[choice] === ' ') {
      if (isCircleTurn) {
        boardObject[choice] = 'O';
        isCircleTurn = !isCircleTurn;
      } else {
        boardObject[choice] = 'X';
        isCircleTurn = !isCircleTurn;
      }
    } else {
      console.log('That is not a valid input');
      console.log('Try again with another position..');
    }
    if (checkHorizontalWinner() || checkVerticalWinner() || checkDiagonalWinner()) {
      return;
    }
    currentRound++;
    if (currentRound < rounds) {
      newRound();
    }
  });
}

const checkHorizontalWinner = () => {
  for (var i = 0; i < 3; i++) {
    if (boardObject[i+1] === 'O' && boardObject[i+2] === 'O' && boardObject[i+3] === 'O') {
      console.log('Circle Wins!');
      console.log('Thanks for playing');
      return true;
    } else if (boardObject[i+1] === 'X' && boardObject[i+2] === 'X' && boardObject[i+3] === 'X') {
      console.log('Cross Wins!');
      console.log('Thanks for playing');
      return true;
    }
  }
}

const checkVerticalWinner = () => {
  for (var i = 0; i < 3; i++) {
    if (boardObject[i+1] === 'O' && boardObject[i+4] === 'O' && boardObject[i+7] === 'O') {
      console.log('Circle Wins!');
      console.log('Thanks for playing');
      return true;
    } else if (boardObject[i+1] === 'X' && boardObject[i+4] === 'X' && boardObject[i+7] === 'X') {
      console.log('Cross Wins!');
      console.log('Thanks for playing');
      return true;
    }
  }
}

const checkDiagonalWinner = () => {
  if (boardObject[1] === 'O' && boardObject[5] === 'O' && boardObject[9] === 'O') {
    console.log('Circle Wins!');
    console.log('Thanks for playing');
    return true;
  } else if (boardObject[1] === 'X' && boardObject[5] === 'X' && boardObject[9] === 'X') {
    console.log('Cross Wins!');
    console.log('Thanks for playing');
    return true;
  }
}

newRound();