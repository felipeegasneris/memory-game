import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { expect } from 'vitest';
describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
