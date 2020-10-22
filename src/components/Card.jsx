import React, { useState, useEffect } from 'react';

import { CardState } from '../store/game';
import './Card.css';

const ClosedCard = ({ point, onClickCarset }) => (
    <button className="card card-closed" onClick={() => onClickCarset(point)}></button>
);

const OpenGreenCard = ({ point }) => (
    <div className="card card-green">{point}</div>
);

const OpenRedCard = ({ point }) => (
    <div className="card card-red">{point}</div>
);

const HiddenCard = () => (
    <div className="card card-hidden"></div>
);

const Card = ({ card, onClickCarset }) => {
    const status = card.status;
    if(status === CardState.Closed) {
        return <ClosedCard point={card.point} onClickCarset={onClickCarset} />;
    } else if(status === CardState.OpenGreen) {
        return <OpenGreenCard point={card.point} />
    } else if(status === CardState.OpenRed) {
        return <OpenRedCard point={card.point} />
    } else {  // must be CardState.Hidden
        return <HiddenCard />
    }
};

export default Card;
