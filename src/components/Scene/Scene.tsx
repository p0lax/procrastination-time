import React from 'react';
import cn from 'classnames';
import styles from './Scene.module.css';
import { CardType } from '~src/services/types';

interface SceneProps {
  card: CardType;
}

function Scene(props: SceneProps) {
  const { card } = props;
  return (
    <div className={cn('content', styles.scene)}>
      <figure className="image">
        <img src={card.img} alt={card.title} />
      </figure>
    </div>
  );
}

export default Scene;
