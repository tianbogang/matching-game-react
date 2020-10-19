import React, { useState, useReducer, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

import Card from './Card';
import Emoji from './Emoji';
import StopWatch from './StopWatch';

import gameReducer, { initGame, playTypes } from '../store/game';

const PlayGame = (props) => {
    let history = useHistory();

    const level = props.match.params.difficulty;
    const [game, dispatch] = useReducer(gameReducer, level, initGame);
    const cardset1 = game.cardset1;
    const cardset2 = game.cardset2;

    const [mood, setMood] = useState(0);
    const [finished, setFinished] = useState(false);

    const timerRef = useRef(null);

    useEffect(() => { 
        timerRef.current.start();
    }, []);

    function checkAndStop() {
        const remainingCards = cardset1.filter(c => c.status !== 3).length + cardset2.filter(c => c.status !== 3).length;
        if(remainingCards === 0)
            setFinished(true);
    }

    function sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    useEffect(() => {
        const interval = game.refresh;
        if(interval !== 0) {
            (interval === 3000) ? setMood(2) : setMood(1);
            sleep(interval).then(() => {
                dispatch({ type: playTypes.refresh, payload: { } });
                setMood(0);
                checkAndStop();  
            });
        }
        else {
            if(finished) {
                timerRef.current.stop();
                const duration = timerRef.current.timeUsed();
                history.push(`/GameOver/${duration}`);
            } else {
                setMood(0);
            }
        }
    });

    function onClickCardset1(point) {
        dispatch({ type: playTypes.clickUno, payload: { point: point } });
    }

    function onClickCardset2(point) {
        dispatch({ type: playTypes.clickDue, payload: { point: point } });
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-around align-items-center mt-2">
                <Emoji mood={mood} />
                <h3>Play Game</h3>
                <StopWatch ref={timerRef} />
            </div>

            <div className="d-flex flex-wrap card-set">
                {cardset1.map((card, index) => 
                    <Card key={index} card={card} onClickCarset={onClickCardset1} />
                )}
            </div>

            <p />

            <div className="d-flex flex-wrap card-set">
                {cardset2.map((card, index) => 
                    <Card key={index} card={card} onClickCarset={onClickCardset2} />
                )}
            </div>
        </div>    
    );
}

export default PlayGame;
