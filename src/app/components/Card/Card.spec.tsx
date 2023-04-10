import { render, screen } from '@testing-library/react';
import Card from './Card';
import { expect } from 'vitest';
import cardBack from '../../../assets/card-back.png';
describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card
        id={1}
        enabled={true}
        image={cardBack}
        name={'rick'}
        show={true}
        isMatched={false}
        species={'human'}
        status={'alive'}
        isSelected={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
