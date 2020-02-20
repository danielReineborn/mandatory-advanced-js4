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
    console.log("activePlayer = ", activePlayer)
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
    // case 1: fyra av samma, fyra i rad i arr.
    // case 2: fyra av samma, i+(6*x) x = antal rader ifrån.
    // case 2: fyra av samma, i+((6*x)+x) x = antal rader ifrån. Går från 1-3.
    // case 3: fyra av samma, i+((6*x)-x) x = antal rader ifrån. Går från 1-3.
    for (let y = 0; y < 6; y++) {// X

        let sameValue = 0;

        let player = arr[y];
        for (let x = 0; x < 7; x++) {

            if (player === arr[y + (6 * x)]) {
                sameValue += 1;
                player = arr[y + (6 * x)];
            } else {
                player = arr[y + (6 * x)];
                sameValue = 1;
            }

            if (player !== "white" && sameValue === 4) {
                console.log(player, "X Wins!!");
                return {
                    winner: player,
                    won: true,
                    draw: false,
                }
            }
        }

    }

    for (let y = 5; y < 42; y += 6) { // Y
        let sameValue = 0;
        let player = arr[y];

        for (let x = 0; x < 6; x++) {


            if (player !== "white" && player === arr[y - x]) {
                sameValue += 1;
                player = arr[y - x];
            } else {
                player = arr[y - x];
                sameValue = 1;
            }
            if (player !== "white" && sameValue === 4) {
                console.log(player, "Y Wins!!");
                return {
                    winner: player,
                    won: true,
                    draw: false,
                }
            }

        }
    }

    for (let y = 0; y < 19; y += 6) { // \
        let sameValue = 1; //Checking three rows.
        let sameValue1 = 1; //one row above.
        let sameValue2 = 1; //two rows above.

        let player = arr[y]; //One variable for each row.
        let player1 = arr[y + 1]; //one row above.
        let player2 = arr[y + 2]; //two rows above.

        /* for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 3; y++) {
                const hej = x*6 + y;
                arr[hej] === arr[(x + 1) * 6 + (y + 1)]
                arr[hej] === arr[hej + 14]
                arr[hej] === arr[hej + 21]
            }
        } */

        for (let x = 1; x < 4; x++) {

            if (player !== "white" && player === arr[y + (6 * x) + x]) {// Checks three rows at a time. Since winning only occurs once this works.
                sameValue += 1;
                player = arr[y + (6 * x) + x];
            } else {
                player = arr[y + (6 * x) + x];
                sameValue = 1;
            }

            if (player1 !== "white" && player1 === arr[(y + 1) + (6 * x) + x]) {
                sameValue1 += 1;
                player1 = arr[(y + 1) + ((6 * x) + x)];
                if (sameValue1 === 4) {
                    sameValue = sameValue1;
                    player = player1;
                }
            } else {
                player1 = arr[(y + 1) + ((6 * x) + x)]
                sameValue1 = 1;
            }

            if (player2 !== "white" && player2 === arr[(y + 2) + ((6 * x) + x)]) {
                sameValue2 += 1;
                player2 = arr[(y + 2) + ((6 * x) + x)];
                if (sameValue2 === 4) {
                    sameValue = sameValue2;
                    player = player2;
                }
            } else {
                player2 = arr[(y + 2) + ((6 * x) + x)]
                sameValue2 = 1;
            }

            if (player !== "white" && sameValue === 4) {
                console.log(player, "Diag \ Wins!!");
                return {
                    winner: player,
                    won: true,
                    draw: false,

                }
            }
        }
    }
    for (let y = 5; y < 24; y += 6) { // /
        let sameValue = 1; //Checking three rows.
        let sameValue1 = 1; //one row above.
        let sameValue2 = 1; //two rows above.

        let player = arr[y]; //One variable for each row.
        let player1 = arr[y - 1]; //one row above.
        let player2 = arr[y - 2]; //two rows above.

        for (let x = 1; x < 4; x++) {

            if (player !== "white" && player === arr[y + ((6 * x) - x)]) {
                sameValue += 1;
                player = arr[y + ((6 * x) - x)];
                console.log("v0", sameValue)
            } else {
                player = arr[y + ((6 * x) - x)];
                sameValue = 1;
            }
            if (player1 !== "white" && player1 === arr[(y - 1) + (6 * x) - x]) {
                sameValue1 += 1;
                player1 = arr[(y - 1) + (6 * x) - x];
                console.log("v1", sameValue1)
                if (sameValue1 === 4) {
                    sameValue = sameValue1;
                    player = player1;
                }
            } else {
                player1 = arr[(y - 1) + (6 * x) - x];
                sameValue1 = 1;
            }

            if (player2 !== "white" && player2 === arr[(y - 2) + (6 * x) - x]) {
                sameValue2 += 1;
                player2 = arr[(y - 2) + (6 * x) - x];
                console.log("v2", sameValue2)

                if (sameValue2 === 4) {
                    sameValue = sameValue2;
                    player = player2;

                }
            } else {
                player2 = arr[(y - 2) + (6 * x) - x];
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
    console.log("no Winner yet.");
    checkDraw(arr);

    return {
        winner: null,
        won: false,
        draw: false,
    }

}

function checkDraw(arr) {
    let foundWhite = false;
    for (let color of arr) {
        if (color === "white") {
            foundWhite = true;
        }
    }
    if (!foundWhite) {
        console.log("DRAW!!")
        return {
            winner: null,
            won: false,
            draw: true,
        }
    } else {
        return;
    }
}

export {
    checkWins,
    handleTurns,
    winnerDisplay,
}