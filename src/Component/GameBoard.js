import React from "react";

function GameBoard({ gamePlan, gameClick }) {

    function handleClickPlay(e) {
        let id = e.target.id;
        gameClick(id);
    }

    return (
        <section className="board-cont">
            <div className="board">
                {gamePlan.map((x, i) => {
                    return <div style={{ backgroundColor: "white", }} key={i} className="circles"><div style={{ backgroundColor: x }} onClick={handleClickPlay} id={i} className="innerCircles" key={i}></div></div>
                })}
            </div>
        </section >
    );
}
export default GameBoard;