import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { roundOff } from '~src/utils/math';
import styles from './Player.module.css';

interface PlayerProps {
  url: string;
}

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  const toggle = () => setPlaying(!playing);
  const levelUp = () => {
    if (volume < 1) {
      const value = roundOff(volume + VOLUME_STEP, 1);
      setVolume(value);
      audio.volume = value;
    }
  };

  const levelDown = () => {
    if (volume > 0) {
      const value = roundOff(volume - VOLUME_STEP, 1);
      setVolume(value);
      audio.volume = value;
    }
  };

  useEffect(() => {
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (!playing) {
      audio.pause();
      return;
    }
    audio.play();
  }, [playing]);

  return {
    playing,
    toggle,
    volume,
    levelUp,
    levelDown,
  };
};

function Player(props: PlayerProps) {
  const { playing, volume, toggle, levelUp, levelDown } = useAudio(props.url);
  return (
    <div className={styles.root}>
      {volume}
      <button type="button" onClick={toggle}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <button type="button" onClick={levelUp}>
        +
      </button>
      <button type="button" onClick={levelDown}>
        -
      </button>
      <i className={classNames('fa-solid fa-plus', styles.icon)}></i>
    </div>
  );
}

export default Player;
