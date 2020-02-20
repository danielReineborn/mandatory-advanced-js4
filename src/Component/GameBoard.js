import React from "react";
import { css } from "glamor";

function GameBoard({ gamePlan, gameClick }) {

    function handleClickPlay(e) {
        let id = e.target.id;
        gameClick(id);
    }

    let styleWhite = css({
        borderRadius: "50%",

        background: "linear - gradient(145deg, #ffffff, #e6e6e6)",
        boxShadow: `8px 8px 13px #cccccc,
        8px 8px 13px #ffffff`,
    })

    let styleRed = css({
        borderRadius: "50%",
        background: "linear-gradient(145deg, #ff294d, #d72241)",
        boxShadow: `8px 8px 13px #bf1e3a, 
                     8px 8px 13px #ff2e56`,
    })

    let styleBlue = css({
        borderRadius: "50%",

        background: "linear - gradient(145deg, #60949b, #517c83)",
        boxShadow: `8px 8px 13px #486e74,
        8px 8px 13px #6ca6ae`,
    })

    return (
        <section className="board-cont">
            <div className="board">
                {gamePlan.map((x, i) => {
                    let styles;
                    /* if (x === "white") styles = styleWhite;
                    if (x === "#ef2648") styles = styleRed;
                    if (x === "#5a8a91") styles = styleBlue; */
                    return <div style={{ backgroundColor: "white", }} key={i} className="circles"><div style={{ backgroundColor: x }} onClick={handleClickPlay} id={i} className="innerCircles" key={i}></div></div>
                })}
            </div>

        </section >
    );
}
export default GameBoard;