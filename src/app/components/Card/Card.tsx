import React from 'react';
import './_Card.scss';
import cardBack from '../../../assets/card-back.png';
import { CardType } from '../../machines/constants';
type LocalCardProps = {
  onClick?: () => void;
};

type CardProps = LocalCardProps & CardType;
export default function Card({
  image,
  isMatched,
  isSelected,
  onClick,
  status,
  species,
  name,
  enabled,
  show,
}: CardProps) {
  const className = `card ${isMatched ? 'card--matched' : ''} ${
    isSelected ? 'card--selected' : ''
  }  ${show ? '' : 'card--hidden'}`;
  const cardImage = isMatched || isSelected ? image : cardBack;
  return (
    <div className={className} onClick={enabled ? onClick : () => {}}>
      <img src={cardImage} alt={name} />
      <div className="card__description">
        <h4>{name}</h4>
        <p>
          {status} - {species}
        </p>
      </div>
    </div>
  );
}
