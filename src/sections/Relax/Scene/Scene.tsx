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
import { rootStore } from '~src/stores';

interface SceneProps {
  store: TimerStore;
}

function Scene(props: SceneProps) {
  let { id } = useParams();
  const card: CardType = CARDS.find((item) => item.id === id);
  const { countdown, status } = props.store;

  useEffect(() => {
    props.store.reset();
  }, []);

  const onTimerToggle = () => {
    if (status === 'running') {
      props.store.stop();
      return;
    }
    props.store.start();
  };

  const imageClassName = cn('image', styles.image, {
    [styles.running]: status === 'running',
  });

  const image = useMemo(
    () => (
      <figure className={imageClassName}>
        <img src={card.img} alt={card.title} />
      </figure>
    ),
    [status]
  );

  return (
    <div className={cn('content', styles.scene)}>
      {image}

      <SceneControls
        url={card.sound}
        onPlay={onTimerToggle}
        store={rootStore.audioStore}
      />
      <Timer time={countdown} status={status} />
    </div>
  );
}

export default observer(Scene);
