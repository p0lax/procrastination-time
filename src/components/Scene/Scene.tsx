import React from 'react';
import cn from 'classnames';
import { CardType } from '~src/services/types';
import { useParams } from 'react-router-dom';
import { CARDS } from '~src/sections/constants';
import SceneControls from '../SceneControls/SceneControls';
import styles from './Scene.module.css';
import Timer from '../Timer/Timer';

function Scene() {
  let { id } = useParams();

  const card: CardType = CARDS.find((item) => item.id === id);

  return (
    <div className={cn('content', styles.scene)}>
      <figure className={cn('image', styles.image)}>
        <img src={card.img} alt={card.title} />
      </figure>

      <SceneControls url={card.sound} />
      <Timer />
    </div>
  );
}

export default Scene;
