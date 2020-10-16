import React from 'react';

const ClosedCard = ({point, onClickCarset}) => (
    <button className="btn card card-closed" onClick={() => onClickCarset(point)}></button>
);

const OpenGreenCard = ({point}) => (
    <div className="card card-green">{point}</div>
);

const OpenRedCard = ({point}) => (
    <div className="card card-red">{point}</div>
);

const HiddenCard = () => (
    <div className="card card-hidden"></div>
);

const Card = ({card, onClickCarset}) => {
    const status = card.status;
    if(status === 0) {
        return <ClosedCard point={card.point} onClickCarset={onClickCarset} />;
    } else if(status === 1) {
        return <OpenGreenCard point={card.point} />
    } else if(status === 2) {
        return <OpenRedCard point={card.point} />
    } else {
        return <HiddenCard />
    }
};

export default Card;
