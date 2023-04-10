import { createMachine } from 'xstate';

import {
  updatePlayerAttempts,
  resetSelectedCards,
  setCards,
  setMatchedCards,
  setAllMatchedCards,
  setRandomPage,
  setSelectedCard,
  setTotalPages,
  updatePlayerScore,
  unsetAllMatchedCards,
  shuffleCards,
  enableCards,
  navigateToGame,
  navigateToFinish,
  navigateToHome,
  resetScores,
  clearCards,
  hideCards,
  showAllCards,
} from './actions';
import {
  MEMORY_MACHINE_INITIAL_CONTEXT,
  MemoryMachineContext,
} from './constants';
import { fetchCharacters, fetchCharactersInfo } from '../data';
import { isMatch, isGameOver } from './helpers';

const MemoryMachine = () =>
  createMachine(
    {
      context: MEMORY_MACHINE_INITIAL_CONTEXT as MemoryMachineContext,
      id: 'memoryMachine',
      initial: 'initialize',
      states: {
        initialize: {
          invoke: {
            src: fetchCharactersInfo,
            onDone: [
              {
                actions: ['setTotalPages', 'setRandomPage'],
                target: 'loading',
              },
            ],
            onError: [
              {
                target: 'initializeError',
              },
            ],
          },
        },
        initializeError: {
          on: {
            REFETCH: {
              target: 'initialize',
            },
          },
        },
        loading: {
          invoke: {
            src: ({ randomPage }) => fetchCharacters(randomPage),
            onDone: [
              {
                actions: ['setCards', 'setAllMatchedCards'],
                target: 'gameShowCards',
              },
            ],
            onError: [
              {
                target: 'loadingError',
              },
            ],
          },
        },
        loadingError: {
          on: {
            REFETCH: {
              target: 'loading',
            },
          },
        },
        gameShowCards: {
          on: {
            GAME_SHOW_CARDS: {
              actions: ['navigateToGame', 'shuffleCards', 'setAllMatchedCards'],
              target: 'delay',
            },
          },
        },
        delay: {
          after: {
            3000: {
              target: 'gameStart',
            },
          },
        },
        gameStart: {
          always: [
            {
              actions: ['unsetAllMatchedCards', 'enableCards'],
              target: 'waitForFirstCard',
            },
          ],
        },
        waitForFirstCard: {
          on: {
            CLICK_CARD: {
              actions: 'setSelectedCard',
              target: 'waitForSecondCard',
            },
          },
        },
        waitForSecondCard: {
          on: {
            CLICK_CARD: {
              actions: 'setSelectedCard',
              target: 'pause',
            },
          },
        },
        pause: {
          after: {
            1000: {
              target: 'compareCards',
            },
          },
        },
        compareCards: {
          always: [
            {
              actions: [
                'updatePlayerScore',
                'setMatchedCards',
                'hideCards',
                'resetSelectedCards',
                'updatePlayerAttempts',
              ],
              cond: 'isMatch',
              target: 'checkGameStatus',
            },
            {
              actions: ['resetSelectedCards', 'updatePlayerAttempts'],
              target: 'waitForFirstCard',
            },
          ],
        },
        checkGameStatus: {
          always: [
            {
              cond: 'isGameOver',
              target: 'finished',
            },
            {
              target: 'waitForFirstCard',
            },
          ],
        },
        finished: {
          entry: ['navigateToFinish'],
          on: {
            RELOAD: {
              actions: ['navigateToHome', 'clearCards'],
              target: 'initialize',
            },
            REPEAT_GAME: {
              actions: [
                'navigateToGame',
                'setAllMatchedCards',
                'resetScores',
                'showAllCards',
              ],
              target: 'delay',
            },
          },
        },
      },
    },
    {
      actions: {
        updatePlayerAttempts,
        resetSelectedCards,
        setCards,
        setMatchedCards,
        setAllMatchedCards,
        setRandomPage,
        setSelectedCard,
        setTotalPages,
        updatePlayerScore,
        unsetAllMatchedCards,
        shuffleCards,
        enableCards,
        navigateToGame,
        navigateToFinish,
        navigateToHome,
        resetScores,
        clearCards,
        hideCards,
        showAllCards,
      },
      guards: {
        isGameOver,
        isMatch,
      },
    }
  );

export default MemoryMachine;
