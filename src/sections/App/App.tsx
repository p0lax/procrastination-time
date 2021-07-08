import React from 'react';
import cn from 'classnames';
import Card from '~src/components/Card/Card';
import { CARDS } from '../constants';

import styles from './App.module.css';

export default function App() {
  return (
    <div className="container is-fullhd">
      <h1 className={cn('title is-1', styles.title)}>
        Choose your way to meditate
      </h1>
      <div className={styles.cards}>
        {CARDS.map((card: any) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
