import { handleTurns, checkWins } from "../Functions";
export default function reducer(state, action) {

    switch (action.type) {
        case `play`:
            let newPlan = [...state.gamePlan];
            let newState = [...state.gameState];
            let col = Math.floor(action.index / 6);

            let won = state.winState.won;

            let playerTurn = state.activePlayer;
            if (state.gameState[col].place >= 0 && won === false) {
                let x = state.gameState[col];
                let placement = x.row * 6 + x.place;
                newPlan[placement] = playerTurn;
                newState[col].place--;
                console.log("playerTurn = ", playerTurn);

                playerTurn = handleTurns(playerTurn, state);
                console.log("playerTurn = ", playerTurn);
                let winState = checkWins(newPlan);

                return {
                    ...state,
                    gamePlan: newPlan,
                    gameState: newState,
                    activePlayer: playerTurn.color,
                    winState: winState,

                }


            } else return state;

        case `reset`:
            let reState = {
                ...state,
                gamePlan: new Array(7 * 6).fill("white"),
                gameState: [{ row: 0, place: 5 },
                { row: 1, place: 5 },
                { row: 2, place: 5 },
                { row: 3, place: 5 },
                { row: 4, place: 5 },
                { row: 5, place: 5 },
                { row: 6, place: 5 }],
                activePlayer: state.players.playerOne.color,
                winState: {
                    winner: null,
                    won: false,
                    draw: false,
                }
            }

            return reState;

        default:
            return state;

    }
}