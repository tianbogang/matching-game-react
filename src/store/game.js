
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
        cardset1: getShuffledCards(level, 0),
        cardset2: getShuffledCards(level, 0),
        refresh: 0
    };
};

const playTypes = {
    clickUno: "clickUno",
    clickDue: "clickDue",
    refresh: "refresh"
};

const gameReducer = (state, action) => {
    function toggleStateInSameCardset(cardset, card) {
        const selectedCard = cardset.find(c => c.status === 1);
        if (selectedCard !== undefined) {
          selectedCard.status = 0;
          card.status = 1;
          // updateView(0);
        }
    }

    function updateStateBetweenCardset(cardset, card) {
        const selectedCard = cardset.find(c => c.status === 1);
        if (selectedCard !== undefined) {
          if(selectedCard.point === card.point) {
            card.status = 1;
            // updateView(1);
            const interval = 1000;
            setTimeout (() => {
              selectedCard.status = 3;
              card.status = 3;
              // updateView(0);
            }, interval);
            return interval;
          } else {
            card.status = 2;
            // updateView(2);
            const interval = 3000;
            setTimeout (() => {
              card.status = 0;
              // updateView(0);
            }, interval);
            return interval;
          }
        } else {
          card.status = 1;
          return 0;
          // updateView(0);
        }
    }      

    switch (action.type) {
        case playTypes.clickUno: {
            let interval = 0;
            const cards1 = state.cardset1.map(c => c);
            const cards2 = state.cardset2.map(c => c);
            const card = cards1.find(c => c.point === action.payload.point);
            if(card !== undefined) {
                toggleStateInSameCardset(cards1, card);
                interval = updateStateBetweenCardset(cards2, card);
            }
            return { ...state, cardset1: cards1, cardset2: cards2, refresh: interval };        
        }

        case playTypes.clickDue: {
            let interval = 0;
            const cards1 = state.cardset1.map(c => c);
            const cards2 = state.cardset2.map(c => c);
            const card = cards2.find(c => c.point === action.payload.point);
            if(card !== undefined) {
                toggleStateInSameCardset(cards2, card);
                interval = updateStateBetweenCardset(cards1, card);
            }
            return { ...state, cardset1: cards1, cardset2: cards2, refresh: interval };        
        }

        case playTypes.refresh: {
            const cards1 = state.cardset1.map(c => c);
            const cards2 = state.cardset2.map(c => c);
            return { ...state, cardset1: cards1, cardset2: cards2, refresh: 0 };        
        }

        default:
            return state;
    }
};

export default gameReducer;
export { initGame, playTypes };
