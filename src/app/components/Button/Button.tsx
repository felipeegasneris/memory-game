import React from 'react';
import './_Button.scss';
export type ButtonProps = {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  text: string;
};

export default function Button({ variant, text, onClick }: ButtonProps) {
  const buttonClass = `button ${variant ? `button--${variant}` : ''}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
