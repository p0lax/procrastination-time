import { signal } from "@preact/signals";
import { COUNTDOWN_SIZE, SECOND } from "constants";

export type TimerStatus = 'running' | 'paused';
export interface TimerSignal {
    timerId: ReturnType<typeof setTimeout> | undefined;
    countdown: number;
    status: TimerStatus;
}

let timerId: ReturnType<typeof setTimeout> | undefined = undefined;
const status = signal<TimerStatus>('paused');
const time = signal<number>(COUNTDOWN_SIZE);


// export const timerSignal = signal<TimerSignal>({
//   timerId: undefined,
//   countdown: COUNTDOWN_SIZE,
//   status: 'paused'
// });


const start = () => {
  timerId = setInterval(() => {
    decrement();
  }, SECOND);
  status.value = 'running';
};

const stop = () => {
  clearInterval(timerId);
  status.value = 'paused';
};

const decrement = () => {
  time.value -= SECOND;
};

 const reset = () => {
  clearInterval(timerId);
  time.value = COUNTDOWN_SIZE;
  status.value = 'paused';
};

export const timerSignal = {
  time,
  status,
  startTimer: start,
  stopTimer: stop,
  resetTimer: reset
}