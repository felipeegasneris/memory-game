import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../context';
import { useActor } from '@xstate/react';
import { useNavigate } from 'react-router-dom';
import './_Finish.scss';
import Button from '../../components/Button/Button';

export type FinishProps = {};

export default function Finish({}: FinishProps) {
  const memoryService = useContext(GlobalStateContext).memoryService;
  const [current, send] = useActor(memoryService);
  const navigate = useNavigate();
  useEffect(() => {
    if (!current.matches('finished')) {
      navigate('/');
    }
  }, []);
  return (
    <div className="finish">
      <h1>¡Felicitaciones!</h1>
      <h3>Terminaste el juego con {current.context.playerAttempts} turnos</h3>
      <div className="finish__buttons">
        <Button
          onClick={() => send('REPEAT_GAME')}
          text="Repetir"
          variant={'primary'}
        />
        <Button
          onClick={() => send('RELOAD')}
          text="Inicio"
          variant="secondary"
        />
      </div>
    </div>
  );
}
