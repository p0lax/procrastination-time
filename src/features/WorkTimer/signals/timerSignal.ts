import { signal } from "@preact/signals";
import { COUNTDOWN_SIZE, SECOND } from "common.const";

export type TimerStatus = 'running' | 'paused';
export interface TimerSignal {
    timerId: ReturnType<typeof setTimeout> | undefined;
    countdown: number;
    status: TimerStatus;
}

let timerId: ReturnType<typeof setTimeout> | undefined = undefined;
const status = signal<TimerStatus>('paused');
const time = signal<number>(COUNTDOWN_SIZE);

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
  if (time.value <= 0) {
    reset();
    return;
  }
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