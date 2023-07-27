const board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "X";
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let gameOver = false;

function makeMove(index) {
    if (!gameOver && board[index] === null) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;

        if (checkWin()) {
            gameOver = true;
            setTimeout(() => {
                alert(`${currentPlayer} ganhou!`);
                resetBoard();
                gameOver = false;
            }, 100);
        } else if (checkDraw()) {
            gameOver = true;
            setTimeout(() => {
                alert("Empate!");
                resetBoard();
                gameOver = false;
            }, 100);
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== null);
}

function resetBoard() {
    board.fill(null);
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}

