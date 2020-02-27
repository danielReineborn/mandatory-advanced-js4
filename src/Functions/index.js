import { ROWS, COLUMNS } from "../Constants"

function winnerDisplay(winner, state) {
    let name = "";
    let playerOne = state.players.playerOne;
    let playerTwo = state.players.playerTwo;

    if (winner === playerOne.color) {
        name = playerOne.name;
    } else {
        name = playerTwo.name;
    }
    return name;
}

function handleTurns(activePlayer, state) {
    let playerTurn;
    let playerOne = state.players.playerOne;
    let playerTwo = state.players.playerTwo;

    if (activePlayer === playerOne.color) {
        playerTurn = playerTwo;
    } else if (activePlayer === playerTwo.color) {
        playerTurn = playerOne;
    }

    return playerTurn;
}

function checkWins(arr) {
    for (let y = 0; y < ROWS; y++) {// X

        let sameValue = 0;

        let player = arr[y];
        for (let x = 0; x < COLUMNS; x++) {

            if (player === arr[y + (ROWS * x)]) {
                sameValue += 1;
                player = arr[y + (ROWS * x)];
            } else {
                player = arr[y + (ROWS * x)];
                sameValue = 1;
            }

            if (player !== "white" && sameValue === 4) {
                return {
                    winner: player,
                    won: true,
                    draw: false,
                }
            }
        }
    }

    for (let y = 5; y < 42; y += ROWS) { // Y
        let sameValue = 0;
        let player = arr[y];

        for (let x = 0; x < ROWS; x++) {
            if (player !== "white" && player === arr[y - x]) {
                sameValue += 1;
                player = arr[y - x];
            } else {
                player = arr[y - x];
                sameValue = 1;
            }
            if (player !== "white" && sameValue === 4) {
                return {
                    winner: player,
                    won: true,
                    draw: false,
                }
            }
        }
    }

    for (let y = 0; y < 19; y += ROWS) { // \
        let sameValue = 1; //Checking three rows.
        let sameValue1 = 1; //one row above.
        let sameValue2 = 1; //two rows above.

        let player = arr[y]; //One variable for each row.
        let player1 = arr[y + 1]; //one row above.
        let player2 = arr[y + 2]; //two rows above.

        for (let x = 1; x < 4; x++) {

            if (player !== "white" && player === arr[y + (ROWS * x) + x]) {// Checks three rows at a time. Since winning only occurs once this works.
                sameValue += 1;
                player = arr[y + (ROWS * x) + x];
            } else {
                player = arr[y + (ROWS * x) + x];
                sameValue = 1;
            }

            if (player1 !== "white" && player1 === arr[(y + 1) + (ROWS * x) + x]) {
                sameValue1 += 1;
                player1 = arr[(y + 1) + ((ROWS * x) + x)];
                if (sameValue1 === 4) {
                    sameValue = sameValue1;
                    player = player1;
                }
            } else {
                player1 = arr[(y + 1) + ((ROWS * x) + x)]
                sameValue1 = 1;
            }

            if (player2 !== "white" && player2 === arr[(y + 2) + ((ROWS * x) + x)]) {
                sameValue2 += 1;
                player2 = arr[(y + 2) + ((ROWS * x) + x)];
                if (sameValue2 === 4) {
                    sameValue = sameValue2;
                    player = player2;
                }
            } else {
                player2 = arr[(y + 2) + ((ROWS * x) + x)]
                sameValue2 = 1;
            }

            if (player !== "white" && sameValue === 4) {
                return {
                    winner: player,
                    won: true,
                    draw: false,

                }
            }
        }
    }
    for (let y = 5; y < 24; y += ROWS) { // /
        let sameValue = 1; //Checking three rows.
        let sameValue1 = 1; //one row above.
        let sameValue2 = 1; //two rows above.

        let player = arr[y]; //One variable for each row.
        let player1 = arr[y - 1]; //one row above.
        let player2 = arr[y - 2]; //two rows above.

        for (let x = 1; x < 4; x++) {

            if (player !== "white" && player === arr[y + ((ROWS * x) - x)]) {
                sameValue += 1;
                player = arr[y + ((ROWS * x) - x)];
            } else {
                player = arr[y + ((ROWS * x) - x)];
                sameValue = 1;
            }

            if (player1 !== "white" && player1 === arr[(y - 1) + (ROWS * x) - x]) {
                sameValue1 += 1;
                player1 = arr[(y - 1) + (ROWS * x) - x];
                if (sameValue1 === 4) {
                    sameValue = sameValue1;
                    player = player1;
                }
            } else {
                player1 = arr[(y - 1) + (ROWS * x) - x];
                sameValue1 = 1;
            }

            if (player2 !== "white" && player2 === arr[(y - 2) + (ROWS * x) - x]) {
                sameValue2 += 1;
                player2 = arr[(y - 2) + (ROWS * x) - x];

                if (sameValue2 === 4) {
                    sameValue = sameValue2;
                    player = player2;
                }
            } else {
                player2 = arr[(y - 2) + (ROWS * x) - x];
                sameValue2 = 1;
            }
            if (player !== "white" && sameValue === 4) {
                return {
                    winner: player,
                    won: true,
                    draw: false,
                }
            }
        }
    }

    let draw = checkDraw(arr);
    if (draw) {
        return {
            winner: null,
            won: false,
            draw: true,
        }
    } else {
        return {
            winner: null,
            won: false,
            draw: false,
        }
    }
}

function checkDraw(arr) {
    let draw = true;
    for (let color of arr) {
        if (color === "white") {
            draw = false;
        }
    }
    return draw;
}

export {
    checkWins,
    handleTurns,
    winnerDisplay,
}