import React, { useState } from 'react';
import cn from 'classnames';
import { CardType } from '~src/services/types';
import { useParams } from 'react-router-dom';
import { CARDS } from '~src/sections/constants';
import SceneControls from '../SceneControls/SceneControls';
import Timer from '../Timer/Timer';
import styles from './Scene.module.css';

type AnimationStatus = 'running' | 'paused';
const SECOND = 1000;
const COUNTDOWN_SIZE = 25 * 60 * SECOND;

function Scene() {
  let { id } = useParams();
  const card: CardType = CARDS.find((item) => item.id === id);
  const [status, setStatus] = useState<AnimationStatus>('paused');
  const [time, setTime] = useState(COUNTDOWN_SIZE);
  const [timer, setTimer] = useState(null);

  const onTimerToggle = () => {
    const newStatus = status === 'running' ? 'paused' : 'running';
    setStatus(newStatus);
    if (newStatus === 'running') {
      const newTimer = setInterval(() => {
        setTime((time) => time - SECOND);
      }, SECOND);
      setTimer(newTimer);
    } else {
      clearInterval(timer);
    }
  };

  const imageClassName = cn('image', styles.image, {
    [styles.running]: status === 'running',
  });

  return (
    <div className={cn('content', styles.scene)}>
      <figure className={imageClassName}>
        <img src={card.img} alt={card.title} />
      </figure>

      <SceneControls url={card.sound} onPlay={onTimerToggle} />
      <Timer time={time} status={status} />
    </div>
  );
}

export default Scene;
