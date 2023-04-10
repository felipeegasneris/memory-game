import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context';
import { useActor } from '@xstate/react';
import './_Score.scss';
export type ScoreProps = {};

export default function Score({}: ScoreProps) {
  const memoryService = useContext(GlobalStateContext).memoryService;
  const [current] = useActor(memoryService);
  const { playerAttempts, playerScore } = current.context;
  return (
    <div className="score">
      <h3>Aciertos: {playerScore}</h3>
      <h3>Turnos: {playerAttempts}</h3>
    </div>
  );
}
