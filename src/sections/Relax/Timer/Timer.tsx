import cn from "classnames";
import { AnimationStatus } from "services/types";
import { zeroPad } from "utils/string";
import styles from "./Timer.module.css";

interface TimerProps {
  time: number;
  status: AnimationStatus;
}

function Timer(props: TimerProps) {
  const displayTime = new Date(props.time);
  const timerClassName = cn(styles.timer, {
    [styles.running]: props.status === "running",
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
