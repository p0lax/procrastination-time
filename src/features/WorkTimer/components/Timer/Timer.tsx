import cn from 'classnames';
import { timerSignal } from 'features/WorkTimer/signals/timerSignal';
import { zeroPad } from 'utils/string';
import styles from './Timer.module.css';
import Icon from 'components/Icon/Icon';

function Timer() {
  const { time, timerSize, status, nextTimer, prevTimer } = timerSignal;
  const isRunning = status.value === 'running';

  const displayTime = new Date(time.value);
  const timerClassName = cn(styles.timer, {
    [styles.running]: isRunning,
  });

  return (
    <div className={timerClassName}>
      {!isRunning && <Icon type="arrowUp" aria-label="prev timer size" onClick={() => prevTimer(timerSize.value)} />}
      &nbsp;
      <div className={styles.timerValue}>
        {zeroPad(displayTime.getMinutes())}:{zeroPad(displayTime.getSeconds())}
      </div>
      &nbsp;
      {!isRunning && <Icon type="arrowDown" aria-label="next timer size" onClick={() => nextTimer(timerSize.value)} />}
    </div>
  );
}

export default Timer;
