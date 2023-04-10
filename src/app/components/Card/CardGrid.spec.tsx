import { render, screen } from '@testing-library/react';
import CardGrid from './CardGrid';
import { expect, vi } from 'vitest';
import React from 'react';
import { GlobalStateContext } from '../../context';
import { MemoryMachine } from '../../machines';
const memoryServiceMock = {
  send: vi.fn(),
  subscribe: vi.fn(),
  start: vi.fn(),
  stop: vi.fn(),
  initialState: MemoryMachine().initialState,
  state: MemoryMachine().initialState,
  getSnapshot: vi.fn(),
  value: MemoryMachine().initialState.value,
  context: MemoryMachine().initialState.context,
};
const currentMock = {
  value: 'some value',
  context: {
    cards: [],
    matchedIDs: new Set(),
    selectedIndexes: new Set(),
    enableCards: true,
  },
};

const sendMock = vi.fn();
describe('CardGrid', () => {
  it('should render successfully', () => {
    vi.mock('@xstate/react', () => ({
      useActor: vi.fn(() => [currentMock, sendMock]),
    }));

    const { baseElement } = render(
      <GlobalStateContext.Provider value={{ memoryService: memoryServiceMock }}>
        <CardGrid />
      </GlobalStateContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
