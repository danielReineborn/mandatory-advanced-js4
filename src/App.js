import React, { useReducer } from 'react';
import Result from "./Component/Result";
import GameBoard from "./Component/GameBoard";
import './App.css';
import reducer from "./Reducers";
import { winnerDisplay } from "./Functions";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    gamePlan: new Array(7 * 6).fill("white"),
    gameState: [{ row: 0, place: 5 },
    { row: 1, place: 5 },
    { row: 2, place: 5 },
    { row: 3, place: 5 },
    { row: 4, place: 5 },
    { row: 5, place: 5 },
    { row: 6, place: 5 }],
    players: {
      playerOne: { name: "Player 1", color: "#ef2648" },
      playerTwo: { name: "Player 2", color: "#5a8a91" }
    },
    activePlayer: "#ef2648",
    winState: {
      winner: null,
      won: false,
      draw: false,
    }
  })


  return (
    <section className="app-cont">
      <h1 className="title">Connect 4</h1>
      <GameBoard gameClick={(id) => dispatch({ type: `play`, index: id })} gamePlan={state.gamePlan}></GameBoard>
      <Result result={state.winState} reset={() => dispatch({ type: "reset" })} state={state}></Result>
    </section>
  );
}

export default App;
