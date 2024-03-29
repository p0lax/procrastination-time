import cn from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CardType } from 'services/types';
import SceneControls from '../SceneControls/SceneControls';
import Timer from '../Timer/Timer';
import styles from './Scene.module.css';
import { timerSignal } from 'features/WorkTimer/signals/timerSignal';
import { CARDS } from 'common.const';

const Scene = React.memo(function Scene() {
  const { id } = useParams();
  const card: CardType | undefined = CARDS.find((item) => item.id === id);
  const { status, stopTimer, startTimer, resetTimer } = timerSignal;

  useEffect(() => {
    return () => {
      resetTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTimerToggle = () => {
    if (status.value === 'running') {
      stopTimer();
      return;
    }
    startTimer();
  };

  const imageClassName = cn('image', styles.image, {
    [styles.running]: status.value === 'running',
  });

  const image = useMemo(
    () => (
      <figure className={imageClassName}>
        <img src={`./assets/images/${card?.id}_0.jpg`} alt={card?.title} />
      </figure>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status.value],
  );

  if (!card) {
    return null;
  }

  return (
    <div className={cn('content', styles.scene)}>
      {image}
      <SceneControls status={status} onStartTimer={onTimerToggle} card={card} />
      <Timer />
    </div>
  );
});

export default Scene;
