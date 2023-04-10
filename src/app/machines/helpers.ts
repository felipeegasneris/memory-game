const isGameOver = (context) =>
  context.matchedIDs.size === context.cardCount / 2;

const isMatch = (context) =>
  context.selectedIDs.size === 1 && context.selectedIndexes.size === 2;

const createCards = ({ cardCount, images }) => {
  const halfDeck = images.slice(0, cardCount / 2);
  const cards = orderCards(halfDeck.concat(halfDeck));
  return cards;
};

const orderCards = (cards) => {
  return cards.sort((a, b) => a.id - b.id);
};

const shuffleElements = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
};

export { isGameOver, isMatch, createCards, shuffleElements };
