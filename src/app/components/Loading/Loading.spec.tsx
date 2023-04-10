import { render, screen } from '@testing-library/react';
import Loading from './Loading';
import { expect } from 'vitest';
describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeTruthy();
  });
});
