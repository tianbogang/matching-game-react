
const CardState = {
  Closed: 0, OpenGreen: 1, OpenRed: 2, Hidden: 3
};

const initGame = (level) => {
  function getShuffledCards(count, status) {
    const pts = Array.from({length: count}, (_, i) => i).sort(() => Math.random() - 0.5);
    const cards = pts.map(p => {
      return { point: p, status: status };
    });
    return cards;
  }

  return { 
    difficulty: level, 
    cardset1: getShuffledCards(level, CardState.Closed),
    cardset2: getShuffledCards(level, CardState.Closed),
    refresh: 0
  };
};

const PlayTypes = {
  clickUno: "clickUno",
  clickDue: "clickDue",
  refresh: "refresh"
};

function toggleStateInSameCardset(cardset, card) {
  const selectedCard = cardset.find(c => c.status === CardState.OpenGreen);
  if (selectedCard !== undefined) {
    selectedCard.status = CardState.Closed;
    card.status = CardState.OpenGreen;
  }
}

function updateStateBetweenCardset(cardset, card) {
  const selectedCard = cardset.find(c => c.status === CardState.OpenGreen);
  if (selectedCard !== undefined) {
    if(selectedCard.point === card.point) {
      card.status = CardState.OpenGreen;
      const interval = 1000;
      setTimeout (() => {
        selectedCard.status = CardState.Hidden;
        card.status = CardState.Hidden;
      }, interval);
      return interval;
    } else {
      card.status = CardState.OpenRed;
      const interval = 3000;
      setTimeout (() => {
        card.status = CardState.Closed;
      }, interval);
      return interval;
    }
  } else {
    card.status = CardState.OpenGreen;
    return 0;
  }
}      

const gameReducer = (state, action) => {
  switch (action.type) {
    case PlayTypes.clickUno: {
      let interval = 0;
      const cards1 = [...state.cardset1];
      const cards2 = [...state.cardset2];
      const card = cards1.find(c => c.point === action.payload.point);
      if(card !== undefined) {
        toggleStateInSameCardset(cards1, card);
        interval = updateStateBetweenCardset(cards2, card);
      }
      return { ...state, cardset1: cards1, cardset2: cards2, refresh: interval };        
    }

    case PlayTypes.clickDue: {
      let interval = 0;
      const cards1 = [...state.cardset1];
      const cards2 = [...state.cardset2];
      const card = cards2.find(c => c.point === action.payload.point);
      if(card !== undefined) {
        toggleStateInSameCardset(cards2, card);
        interval = updateStateBetweenCardset(cards1, card);
      }
      return { ...state, cardset1: cards1, cardset2: cards2, refresh: interval };        
    }

    case PlayTypes.refresh: {
      return { ...state, refresh: 0 };        
    }

    default:
      return state;
  }
};

export default gameReducer;
export { CardState, initGame, PlayTypes };
