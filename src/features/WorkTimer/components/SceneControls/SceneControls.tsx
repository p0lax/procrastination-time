import { useNavigate } from 'react-router-dom';
import styles from './SceneControls.module.css';
import { audioSignal } from 'features/WorkTimer/signals/audioSignal';
import Icon from 'components/Icon/Icon';
import cn from 'classnames';
import { TimerStatus } from 'features/WorkTimer/signals/timerSignal';
import { Signal } from '@preact/signals';

interface SceneControlsProps {
  status: Signal<TimerStatus>;
  onPlay: () => void;
  onStartTimer: () => void;
}

function SceneControls({ status, onPlay, onStartTimer }: SceneControlsProps) {
  const { isPlaying, volume, levelDown, levelUp } = audioSignal;
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  };

  console.log('status', status);
  return (
    <section className={styles.menuWrapper}>
      <div className={styles.buttonWrapper}>
        <Icon type="back" onClick={moveBack} />
      </div>
      <div className={styles.buttonWrapper}>
        <Icon
          aria-label="start timer"
          onClick={onStartTimer}
          type={status.value === 'running' ? 'pause' : 'play'}
        />
      </div>
      <div className={styles.volumeControl}>
        <span className={styles.value}>{volume.value * 100} % </span>
        <div className={styles.controls}>
          <Icon
            type="plus"
            size="md"
            aria-label="increase volume"
            onClick={levelUp}
          />
          <Icon
            type="minus"
            size="md"
            aria-label="decrease volume"
            onClick={levelDown}
          />
        </div>
      </div>
      <div className={cn(styles.buttonWrapper, styles.musicControl)}>
        <Icon
          size="md"
          aria-label="turn on background music"
          type={isPlaying.value ? 'speakerOn' : 'speakerOff'}
          onClick={onPlay}
        />
      </div>
    </section>
  );
}

export default SceneControls;
