import React, { useContext, useEffect } from 'react';
import CardGrid from '../../components/Card/CardGrid';
import { GlobalStateContext } from '../../context';
import Score from '../../components/Score/Score';
import { useActor } from '@xstate/react';
import { useNavigate } from 'react-router-dom';

export default function Game() {
  const memoryService = useContext(GlobalStateContext).memoryService;
  const [current] = useActor(memoryService);
  const navigate = useNavigate();

  useEffect(() => {
    if (!current.matches('delay') && !current.matches('gameShowCards')) {
      navigate('/');
    }
  }, []);
  return (
    <div className="game">
      <Score />
      <CardGrid />
    </div>
  );
}
