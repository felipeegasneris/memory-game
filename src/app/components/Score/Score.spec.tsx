import { render, screen } from '@testing-library/react';
import Score from './Score';
import { expect } from 'vitest';
describe('Score', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Score />);
    expect(baseElement).toBeTruthy();
  });
});
