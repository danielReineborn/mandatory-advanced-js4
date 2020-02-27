import React from "react";
import ReactDOM from "react-dom"
import { winnerDisplay } from "../Functions"

const Result = ({ result, reset, state }) => {

    function onClick(e) {
        e.stopPropagation();

        reset();
    }

    return (
        result.won === true
            ? ReactDOM.createPortal(
                <div className="result-portal">
                    <div>
                        <h1 className="title-portal">{winnerDisplay(result.winner, state)} has won!</h1>
                        <button onClick={onClick}>Reset</button>
                    </div>
                </div>, document.body

            )
            : null

    );




}

export default Result;