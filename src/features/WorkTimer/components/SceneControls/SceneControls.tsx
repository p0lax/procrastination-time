import { useNavigate } from 'react-router-dom';
import styles from './SceneControls.module.css';
import { audioSignal } from 'features/WorkTimer/signals/audioSignal';
import Icon from 'components/Icon/Icon';
import cn from 'classnames';
import { Signal } from '@preact/signals';
import Spin from 'components/Spin/Spin';
import { TimerStatus } from 'features/WorkTimer/types';

interface SceneControlsProps {
  status: Signal<TimerStatus>;
  isAudioLoading: boolean;
  onPlay: () => void;
  onStartTimer: () => void;
}

function SceneControls({ status, isAudioLoading, onPlay, onStartTimer }: SceneControlsProps) {
  const { isReady, isPlaying, volume, levelDown, levelUp } = audioSignal;
  const navigate = useNavigate();

  const moveBack = () => {
    navigate('/');
  };

  return (
    <section className={styles.menuWrapper}>
      <div className={styles.buttonWrapper}>
        <Icon type="back" onClick={moveBack} />
      </div>
      <div className={styles.buttonWrapper}>
        <Icon aria-label="start timer" onClick={onStartTimer} type={status.value === 'running' ? 'pause' : 'play'} />
      </div>
      <div className={styles.volumeControl}>
        <span className={styles.value}>{volume.value * 100} % </span>
        <div className={styles.controls}>
          <Icon type="plus" size="md" disabled={!isReady.value} aria-label="increase volume" onClick={levelUp} />
          <Icon type="minus" size="md" disabled={!isReady.value} aria-label="decrease volume" onClick={levelDown} />
        </div>
      </div>

      <div className={cn(styles.buttonWrapper, styles.musicControl)}>
        {isAudioLoading ? (
          <Spin />
        ) : (
          <Icon
            size="md"
            aria-label="turn on background music"
            type={isPlaying.value ? 'speakerOn' : 'speakerOff'}
            onClick={onPlay}
          />
        )}
      </div>
    </section>
  );
}

export default SceneControls;
