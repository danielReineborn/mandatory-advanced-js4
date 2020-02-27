import React from "react";
import ReactDOM from "react-dom"

import { winnerDisplay } from "../Functions"

const Result = ({ result, reset, state }) => {

    function onClick(e) {
        e.stopPropagation();
        reset();
    }

    function decideWinner(result) {
        if (result.won === true) {
            return ReactDOM.createPortal(
                <div className="result-portal">
                    <div className="title-cont">
                        <h1 className="title-portal">{winnerDisplay(result.winner, state)} has won!</h1>
                    </div>
                    <button className="btn" onClick={onClick}>Reset</button>
                </div>, document.body
            )
        } else if (result.draw === true) {
            return ReactDOM.createPortal(
                <div className="result-portal">
                    <div className="title-cont">
                        <h1 className="title-portal">Draw!</h1>
                    </div>
                    <button className="btn" onClick={onClick}>Reset</button>
                </div>, document.body
            )
        } else return null;
    }

    return (
        decideWinner(result)
    );
}

export default Result;