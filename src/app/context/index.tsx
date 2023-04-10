import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { MemoryMachine } from '../machines';
import { InterpreterFrom } from 'xstate';

export const GlobalStateContext = createContext({
  memoryService: {} as InterpreterFrom<typeof MemoryMachine>,
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const memoryService = useInterpret(MemoryMachine);

  return (
    <GlobalStateContext.Provider value={{ memoryService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
