import classNames from 'classnames';
import React from 'react';
import { useAudio } from '~src/hooks/useAudio';
import styles from './Player.module.css';

interface PlayerProps {
  url: string;
}

function Player(props: PlayerProps) {
  const { playing, volume, toggle, levelUp, levelDown } = useAudio(props.url);

  const playClassName = classNames('fas', styles.playIcon, styles.icon, {
    'fa-play': !playing,
    'fa-pause': playing,
  });
  return (
    <div className={styles.root}>
      <div className={styles.playWrapper} onClick={toggle}>
        <i className={playClassName}></i>
      </div>
      <div className={styles.volumeWrapper}>
        <span className={styles.value}>{volume * 100} % </span>
        <div className={styles.controls}>
          <i
            className={classNames('fas fa-plus', styles.icon)}
            onClick={levelUp}
          ></i>
          <i
            className={classNames('fas fa-minus', styles.icon)}
            onClick={levelDown}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Player;
