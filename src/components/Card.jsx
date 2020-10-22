import React, { useState, useEffect } from 'react';
import { createUseStyles } from "react-jss";

import { CardState } from '../store/game';

const useStyles = createUseStyles({
    card: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none !important",
        border: "0px solid",
        borderRadius: 4
    },
    cardClosed: {
        extend: "card",
        backgroundColor: "white"
    },
    '@keyframes spin-to-green': {
        from: {
            color: "black",
            backgroundColor: "white",
            transform: "rotateY(180deg)"
        },
        to: {
            color: "white",
            backgroundColor: "green",
            transform: "rotateY(0deg)"
        }
    },
    cardGreen: {
        extend: "card",
        color: "white",
        backgroundColor: "green",
        animationName: "$spin-to-green",
        animationDuration: "0.5s",
        animationTimingFunction: "linear"
    },
    '@keyframes spin-to-red': {
        from: {
            transform: "rotateY(180deg)"
        },
        to: {
            transform: "rotateY(0deg)"
        }
    },
    cardRed: {
        extend: "card",
        color: "white",
        backgroundColor: "red",
        animationName: "$spin-to-red",
        animationDuration: "0.5s",
        animationTimingFunction: "linear"
    },
    '@keyframes spin-to-hidden': {
        from: {
            backgroundColor: "green"
        },
        to: {
            backgroundColor: "transparent",
            border: "0px white"
        }
    },
    cardHidden: {
        extend: "card",
        animationName: "$spin-to-hidden",
        animationDuration: "0.5s",
        animationTimingFunction: "ease-out"
    }
});

const ClosedCard = ({ point, onClickCarset }) => {
    const style = useStyles();
    return (
        <button className={style.cardClosed} onClick={() => onClickCarset(point)}></button>
    );
};

const OpenGreenCard = ({ point }) => {
    const style = useStyles();
    return (
        <div className={style.cardGreen}>{point}</div>
    );
};

const OpenRedCard = ({ point }) => {
    const style = useStyles();
    return (
        <div className={style.cardRed}>{point}</div>
    );
};

const HiddenCard = () => {
    const style = useStyles();
    return (
        <div className={style.cardHidden}></div>
    );
};

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
