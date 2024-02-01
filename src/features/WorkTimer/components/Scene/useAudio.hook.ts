import { useLoadingState } from 'hooks/useLoadingState';
import { useRef, useState } from 'react';
import { roundOff } from 'utils/math';

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

export const useAudio = () => {
  const audionRef = useRef<HTMLAudioElement>(null);
  const { loading, setLoading } = useLoadingState();
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    if (!audionRef.current) {
      return;
    }
    if (isPlaying) {
      audionRef.current.pause();
      setIsPlaying(false);
    } else {
      audionRef.current.play();
      setIsPlaying(true);
    }
  };

  const volumeDown = () => {
    if (!audionRef.current || audionRef.current.volume === 0) {
      return;
    }

    const value = roundOff(audionRef.current.volume - VOLUME_STEP, 1);
    setVolume(value);
    audionRef.current.volume = value;
  };

  const volumeUp = () => {
    if (!audionRef.current || audionRef.current.volume === 1) {
      return;
    }

    console.log('audionRef.current.volume', audionRef.current.volume);
    const value = roundOff(audionRef.current.volume + VOLUME_STEP, 1);
    setVolume(value);
    audionRef.current.volume = value;
  };

  const onLoad = () => {
    console.log('ONLOAD');
    setLoading(false);
    setVolume(DEFAULT_VOLUME);
    if (!audionRef.current) {
      return;
    }
    audionRef.current.volume = DEFAULT_VOLUME;
  };

  return {
    isPlaying,
    audionRef,
    volume,
    loading,
    toggleAudio,
    onLoad,
    volumeUp,
    volumeDown,
  };
};
