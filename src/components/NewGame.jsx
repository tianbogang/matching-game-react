import React from 'react';
import { useHistory } from "react-router-dom";

import logo from '../logo.svg';

const NewGame = () => {
    let history = useHistory();

    function startNewGame(difficulty) {
        history.push(`/PlayGame/${difficulty}`);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <img src={logo} alt="REACT" width="60" height="60" />
                <h1>Matching Game</h1>
            </div>
    
            <h5 className="center-text">Please select game difficulty</h5>
    
            <div className="d-flex justify-content-center">
                <button className="btn-lg mx-6" onClick={() => startNewGame(3)}>Easy</button>
                <button className="btn-lg btn-primary mx-6" onClick={() => startNewGame(10)}>Medium</button>
                <button className="btn-lg btn-danger mx-6" onClick={() => startNewGame(25)}>Hard</button>
            </div>
        </div>
    );    
}

export default NewGame;
