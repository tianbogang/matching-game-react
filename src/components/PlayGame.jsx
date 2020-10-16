import React, { useState, useEffect  } from 'react';
import { useHistory } from "react-router-dom";

import Card from './Card';
import Emoji from './Emoji';

const PlayGame = (props) => {
    let history = useHistory();

    const level = props.match.params.difficulty;
    const [cardset1, setCardset1] = useState(() => {
        return getShuffledCards(level, 0);
    });
    const [cardset2, setCardset2] = useState(() => {
        return getShuffledCards(level, 0);
    });

    const [mood, setMood] = useState(0);

    useEffect(() => {
    });

    function getShuffledCards(count, status) {
        const pts = Array.from({length: count}, (_, i) => i).sort(() => Math.random() - 0.5);
        const cards = pts.map(p => {
            return { point: p, status: status };
        });
        return cards;
    }

    function updateView(theMood)
    {
        const newCards1 = cardset1.map(card => card);
        setCardset1(newCards1);
        const newCards2 = cardset2.map(card => card);
        setCardset2(newCards2);

        setMood(theMood);
    }

    function toggleStateInSameCardset(cardset, card) {
        const selectedCard = cardset.find(c => c.status === 1);
        if (selectedCard !== undefined) {
          selectedCard.status = 0;
          card.status = 1;
          updateView(0);
        }
    }
      
    function updateStateBetweenCardset(cardset, card) {
        const selectedCard = cardset.find(c => c.status === 1);
        if (selectedCard !== undefined) {
          if(selectedCard.point === card.point) {
            card.status = 1;
            updateView(1);
            setTimeout (() => {
              selectedCard.status = 3;
              card.status = 3;
              updateView(0);
            }, 1000);
          } else {
            card.status = 2;
            updateView(2);
            setTimeout (() => {
              card.status = 0;
              updateView(0);
            }, 3000);
          }
        } else {
          card.status = 1;
          updateView(0);
        }
    }      

    function checkAndStop() {
        setTimeout (() => {
            if(
                cardset1.filter(c => c.status !== 3).length === 0 && 
                cardset2.filter(c => c.status !== 3).length === 0 
            ) {
                const duration = "00:00:36";
                history.push(`/GameOver/${duration}`);
            }
        }, 1000);
    }

    function onClickCardset1(point) {
        const card = cardset1.find(c => c.point === point);
        if(card !== undefined) {
          toggleStateInSameCardset(cardset1, card);
          updateStateBetweenCardset(cardset2, card);
        }
        checkAndStop();
    }

    function onClickCardset2(point) {
        const card = cardset2.find(c => c.point === point);
        if(card !== undefined) {
          toggleStateInSameCardset(cardset2, card);
          updateStateBetweenCardset(cardset1, card);
        }
        checkAndStop();
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-around align-items-center mt-2">
                <Emoji mood={mood} />
                <h3>Play Game</h3>
                <h3>00:00:16</h3>
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
