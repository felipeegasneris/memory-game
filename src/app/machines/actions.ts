import { assign, EventObject } from 'xstate';

import { createCards, shuffleElements } from './helpers';
import { router } from '../app';
import { MemoryMachineContext } from './constants';

type MemoryMachineEvent = EventObject & {
  data: {
    data: {
      characters: {
        info: {
          pages: number;
        };
        results: {
          id: string;
          image: string;
        };
      };
    };
  };
};

export const clearCards = assign((context) => {
  context.cards = [];
});

export const enableCards = assign((context) => {
  context.enableCards = true;
});
export const updatePlayerAttempts = assign({
  playerAttempts: ({ playerAttempts }) => playerAttempts + 1,
});

export const resetSelectedCards = assign((context) => {
  context.selectedIndexes = new Set();
  context.selectedIDs = new Set();
});

export const resetScores = assign((context) => {
  context.playerAttempts = 0;
  context.playerScore = 0;
});

export const setCards = assign<MemoryMachineContext, MemoryMachineEvent>({
  cards: ({ cardCount }, event) =>
    createCards({
      cardCount,
      images: event.data.data.characters.results,
    }),
});

export const shuffleCards = assign((context) => {
  context.cards = shuffleElements(context.cards);
});

export const setMatchedCards = assign((context) => {
  context.matchedIDs = new Set([...context.matchedIDs, ...context.selectedIDs]);
});

export const hideCards = assign((context) => {
  context.cards = context.cards.map((card) => {
    if (context.matchedIDs.has(card.id)) {
      return {
        ...card,
        show: false,
      };
    }
    return card;
  });
});

export const showAllCards = assign((context) => {
  context.cards = context.cards.map((card) => {
    return {
      ...card,
      show: true,
    };
  });
});

export const setAllMatchedCards = assign((context) => {
  context.matchedIDs = new Set(context.cards.map((card) => card.id));
});

export const unsetAllMatchedCards = assign((context) => {
  context.matchedIDs = new Set();
});

export const setRandomPage = assign({
  randomPage: ({ totalPages }) =>
    Math.floor(Math.random() * (totalPages - 1) + 1),
});

export const setSelectedCard = assign((context, { payload }) => {
  const { index, id } = payload;
  context.selectedIndexes.add(index);
  context.selectedIDs.add(id);
  return context;
});

export const setTotalPages = assign({
  totalPages: (_, event) => event.data.data.characters.info.pages,
});

export const updatePlayerScore = assign((context) => {
  context.playerScore++;
});
export const navigateToGame = () => {
  return router.navigate('/game');
};

export const navigateToHome = () => {
  return router.navigate('/');
};

export const navigateToFinish = () => {
  return router.navigate('/finish');
};
