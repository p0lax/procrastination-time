import { useState, useEffect } from 'react';
import { roundOff } from '~src/utils/math';

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;
export const useAudio = (url: string) => {
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
