/*Backtracking is a technique used to solve problems by trying out different possibilities and undoing (backtracking)
if a solution is not found. 
Here's a simple example of backtracking in JavaScript to solve the N-Queens problem:

The N-Queens problem is a classic puzzle where you need to place N queens on an N×N chessboard such that no two 
queens threaten each other.*/
function solveNQueens(n) {
  const board = new Array(n).fill().map(() => new Array(n).fill('.'));
  const solutions = [];

  function isSafe(row, col) {
    // Check the column for a queen in the same column.
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    // Check the upper-left diagonal.
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    // Check the upper-right diagonal.
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);

  return solutions;
}

const n = 4; // Change this to the desired board size
const solutions = solveNQueens(n);

for (const solution of solutions) {
  console.log(solution);
  console.log('\n');
}
