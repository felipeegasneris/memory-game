import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import './_Layout.scss';
export type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="layout">
      <header className="layout__header">
        <div className="layout__header-logo">
          <Logo />
          <h3>Juego de memoria</h3>
        </div>
      </header>
      <section className="layout__content">{children}</section>
    </main>
  );
}
