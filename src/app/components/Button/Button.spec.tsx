import { render, screen } from '@testing-library/react';
import Button from './Button';
import { expect } from 'vitest';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button variant={'primary'} text={'hola'} />
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByText('hola')).toBeTruthy();
  });
});
