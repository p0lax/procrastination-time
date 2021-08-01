import React from 'react';
import cn from 'classnames';
import { CardType } from '~src/services/types';
import { useParams, useHistory } from 'react-router-dom';
import { CARDS } from '~src/sections/constants';
import Player from '../Player/Player';
import styles from './Scene.module.css';

function Scene() {
  let { id } = useParams();
  let history = useHistory();

  const card: CardType = CARDS.find((item) => item.id === id);
  const moveBack = () => {
    history.goBack();
  };

  return (
    <div className={cn('content', styles.scene)}>
      <figure className={cn('image', styles.image)}>
        <img src={card.img} alt={card.title} />
      </figure>
      <div className={styles.menuWrapper}>
        <div className={styles.backItemWrapper}>
          <i
            className={cn('fas fa-long-arrow-alt-left', styles.backBtn)}
            onClick={moveBack}
          ></i>
        </div>
        <Player url={card.sound} />
      </div>
    </div>
  );
}

export default Scene;
