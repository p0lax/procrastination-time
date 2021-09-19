import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { CardType } from '~src/services/types';
import { useParams } from 'react-router-dom';
import { CARDS } from '~src/sections/constants';
import SceneControls from '../SceneControls/SceneControls';
import Timer from '../Timer/Timer';
import TimerStore from '~src/stores/TimerStore';
import styles from './Scene.module.css';

interface SceneProps {
  store: TimerStore;
}

function Scene(props: SceneProps) {
  let { id } = useParams();
  const card: CardType = CARDS.find((item) => item.id === id);
  const { store } = props;

  useEffect(() => {
    store.reset();
  }, []);

  const onTimerToggle = () => {
    if (store.status === 'running') {
      store.stop();
      return;
    }
    store.start();
  };

  const imageClassName = cn('image', styles.image, {
    [styles.running]: store.status === 'running',
  });

  const image = useMemo(
    () => (
      <figure className={imageClassName}>
        <img src={card.img} alt={card.title} />
      </figure>
    ),
    [store.status]
  );

  return (
    <div className={cn('content', styles.scene)}>
      {image}

      <SceneControls url={card.sound} onPlay={onTimerToggle} />
      <Timer time={store.countdown} status={store.status} />
    </div>
  );
}

export default observer(Scene);
