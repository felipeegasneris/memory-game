export type CardType = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  isSelected: boolean;
  isMatched: boolean;
  enabled: boolean;
  show: boolean;
};

export type MemoryMachineContext = {
  cardCount: number;
  cards: CardType[];
  enableCards: boolean;
  currentPlayer: number;
  matchedIDs: Set<number>;
  playerScore: number;
  playerAttempts: number;
  scoreBoard: any[];
  selectedIDs: Set<number>;
  selectedIndexes: Set<number>;
  randomPage: number;
  totalPages: number;
};

export const MEMORY_MACHINE_INITIAL_CONTEXT: MemoryMachineContext = {
  cardCount: 12,
  cards: [],
  enableCards: false,
  currentPlayer: 1,
  matchedIDs: new Set(),
  playerScore: 0,
  playerAttempts: 0,
  scoreBoard: [],
  selectedIDs: new Set(),
  selectedIndexes: new Set(),
  randomPage: 1,
  totalPages: 1,
};
