import Icon from 'components/Icon/Icon';
import styles from './AudioControls.module.css';
import { useAudio } from '../../Scene/useAudio.hook';
import { CardType } from 'services/types';
import Spin from 'components/Spin/Spin';
import cn from 'classnames';
import { useEffect } from 'react';

type AudioControlsProps = {
  card: CardType;
};

const AudioControls = ({ card }: AudioControlsProps) => {
  const { volume, audionRef, loading, isPlaying, onLoad, volumeUp, volumeDown, toggleAudio } = useAudio();

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <audio ref={audionRef} style={{ position: 'absolute', top: 100, zIndex: 11 }} loop>
        <source src={card.soundURL.substring(1)} type="audio/mp3" onLoad={onLoad} />
      </audio>
      <div className={styles.volumeControl}>
        <span className={styles.value}>{volume * 100} % </span>
        <div className={styles.controls}>
          <Icon type="plus" size="md" disabled={loading} aria-label="increase volume" onClick={volumeUp} />
          <Icon type="minus" size="md" disabled={loading} aria-label="decrease volume" onClick={volumeDown} />
        </div>
      </div>

      <div className={cn(styles.buttonWrapper, styles.musicControl)}>
        {loading ? (
          <Spin />
        ) : (
          <Icon
            size="md"
            aria-label="turn on background music"
            type={isPlaying ? 'speakerOn' : 'speakerOff'}
            onClick={toggleAudio}
          />
        )}
      </div>
    </>
  );
};

export default AudioControls;
