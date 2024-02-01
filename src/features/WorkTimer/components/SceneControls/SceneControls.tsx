import { useNavigate } from 'react-router-dom';
import styles from './SceneControls.module.css';
import Icon from 'components/Icon/Icon';
import { Signal } from '@preact/signals';
import { TimerStatus } from 'features/WorkTimer/types';
import AudioControls from './AudioControls/AudioControls';
import { CardType } from 'services/types';

interface SceneControlsProps {
  status: Signal<TimerStatus>;
  card: CardType;
  onStartTimer: () => void;
}

function SceneControls({ status, card, onStartTimer }: SceneControlsProps) {
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
      <AudioControls card={card} />
    </section>
  );
}

export default SceneControls;
