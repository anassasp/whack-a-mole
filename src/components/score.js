import React from "react";

const ScoreBoard = (props) => {
    return(
        <>
            <p className="score">{props.time}</p>
            <p className="score">{props.score}</p>
        </>
    )
}

export default ScoreBoard;