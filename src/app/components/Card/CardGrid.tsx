import { useActor } from '@xstate/react';
import Card from './Card';
import './_CardGrid.scss';
import { useContext } from 'react';
import { GlobalStateContext } from '../../context';
import Loading from '../Loading/Loading';

const cardGrid = () => {
  const memoryService = useContext(GlobalStateContext).memoryService;
  const [current, send] = useActor(memoryService);
  const { cards, selectedIndexes, matchedIDs, enableCards } = current.context;
  return (
    <>
      {cards.length === 0 && <Loading />}
      <div className="cardGrid">
        {cards.map(({ id, image, name, species, status, show }, index) => (
          <Card
            show={show}
            id={id}
            key={index}
            enabled={enableCards}
            image={image}
            isMatched={matchedIDs.has(id)}
            isSelected={selectedIndexes.has(index)}
            name={name}
            onClick={
              !selectedIndexes.has(index)
                ? () =>
                    send({
                      payload: { index, id },
                      type: 'CLICK_CARD',
                    })
                : () => {}
            }
            status={status}
            species={species}
          />
        ))}
      </div>
    </>
  );
};

export default cardGrid;
