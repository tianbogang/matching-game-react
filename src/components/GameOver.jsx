import React from 'react';
import { useHistory } from "react-router-dom";

const GameOver = (props) => {
    let history = useHistory();

    const duration = props.match.params.duration;

    function playAgain() {
        history.push("/NewGame");
    }

    return (
        <div className="container">
            <h1 className="center-text">Game Over</h1>
            <h5 className="center-text">Time used: {duration}</h5>
            <div className="d-flex justify-content-center">
                <button className="btn-lg" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default GameOver;
