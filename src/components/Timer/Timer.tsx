import React from 'react';
import styles from './Timer.module.css';

function Timer() {
  return (
    <div className={styles.timer}>
      <div className={styles.timerValue}>25:00</div>
    </div>
  );
}

export default Timer;
