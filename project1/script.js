const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            result.textContent = `Player ${currentPlayer} wins!`;
            break;
        }
    }

    if (!gameBoard.includes("") && !gameOver) {
        result.textContent = "It's a draw!";
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);

    if (gameBoard[index] === "" && !gameOver) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.dataset.cell = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        result.textContent = `Player ${currentPlayer}'s Turn`;

        checkWinner();
    }
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.dataset.cell = "";
    });
    currentPlayer = "X";
    gameOver = false;
    result.textContent = `Player ${currentPlayer}'s Turn`;
    resetBtn.disabled = true;
}

cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});

resetBtn.addEventListener("click", resetGame);