import cn from 'classnames';
import React from 'react';
import { useAudio } from '~src/hooks/useAudio';
import { useHistory } from 'react-router-dom';
import styles from './SceneControls.module.css';

interface SceneControlsProps {
  url: string;
  onPlay: () => void;
}

function SceneControls(props: SceneControlsProps) {
  const { playing, volume, toggle, levelUp, levelDown } = useAudio(props.url);

  let history = useHistory();
  const playClassName = cn('fas', styles.playIcon, styles.icon, {
    'fa-play': !playing,
    'fa-pause': playing,
  });
  const moveBack = () => {
    history.goBack();
  };
  const onPlay = () => {
    toggle();
    props.onPlay();
  };
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.backItemWrapper}>
        <i
          className={cn('fas fa-long-arrow-alt-left', styles.backBtn)}
          onClick={moveBack}
        ></i>
      </div>
      <div className={styles.playWrapper} onClick={onPlay}>
        <i className={playClassName}></i>
      </div>
      <div className={styles.volumeWrapper}>
        <span className={styles.value}>{volume * 100} % </span>
        <div className={styles.controls}>
          <i className={cn('fas fa-plus', styles.icon)} onClick={levelUp}></i>
          <i
            className={cn('fas fa-minus', styles.icon)}
            onClick={levelDown}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default SceneControls;
