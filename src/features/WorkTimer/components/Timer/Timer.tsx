import cn from "classnames";
import { timerSignal } from "features/WorkTimer/signals/timerSignal";
import { zeroPad } from "utils/string";
import styles from "./Timer.module.css";

function Timer() {
  const { time, status } = timerSignal;
  const displayTime = new Date(time.value);
  const timerClassName = cn(styles.timer, {
    [styles.running]: status.value === "running",
  });

  return (
    <div className={timerClassName}>
      <div className={styles.timerValue}>
        {zeroPad(displayTime.getMinutes())}:{zeroPad(displayTime.getSeconds())}
      </div>
    </div>
  );
}

export default Timer;
