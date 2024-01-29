import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from './SceneControls.module.css';
import { audioSignal } from 'features/WorkTimer/signals/audioSignal';
import Icon from 'components/Icon/Icon';

interface SceneControlsProps {
  onPlay: () => void;
}

function SceneControls({ onPlay }: SceneControlsProps) {
  const { isPlaying, volume, levelDown, levelUp } = audioSignal;
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
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
        <Icon type={isPlaying.value ? 'pause' : 'play'} />
      </div>
      <div className={styles.volumeWrapper}>
        <span className={styles.value}>{volume.value * 100} % </span>
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
