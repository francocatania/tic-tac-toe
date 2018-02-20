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
  prompt.get(['position'], function (err, result) {
    let choice = result.position;
    if (boardObject[choice]) {
      if (isCircleTurn) {
        boardObject[choice] = 'O';
        console.log(boardObject[choice]);
        isCircleTurn = !isCircleTurn;
      } else {
        boardObject[choice] = 'X';
        isCircleTurn = !isCircleTurn;
      }
    } else {
      console.log('That is not a valid input');
    }
    currentRound++;
    if (currentRound < rounds) {
      newRound();
    }
  });
}

newRound();