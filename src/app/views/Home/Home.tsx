import React, { useContext } from 'react';
import Button from '../../components/Button/Button';
import CardGrid from '../../components/Card/CardGrid';
import { useActor } from '@xstate/react';
import { GlobalStateContext } from '../../context';
import './_Home.scss';
export type HomeProps = {};

export default function Home({}: HomeProps) {
  const memoryService = useContext(GlobalStateContext).memoryService;
  const [_, send] = useActor(memoryService);
  return (
    <div className="home">
      <h3>Personajes</h3>
      <div>
        <CardGrid />
      </div>
      <Button
        onClick={() => {
          send('GAME_SHOW_CARDS');
        }}
        text={'Jugar'}
        variant={'primary'}
      />
    </div>
  );
}
