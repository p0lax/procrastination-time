import { signal } from '@preact/signals';
import { SECOND } from 'common.const';
import { TimeSize, TimerStatus, timerSizes } from '../types';

const DEFAULT_TIMER_SIZE = '25';
const TIMER_SIZES_LIST = Object.keys(timerSizes);

export interface TimerSignal {
  timerId: ReturnType<typeof setTimeout> | undefined;
  countdown: number;
  status: TimerStatus;
}

let timerId: ReturnType<typeof setTimeout> | undefined = undefined;
const timerSize = signal<TimeSize>(DEFAULT_TIMER_SIZE);
const status = signal<TimerStatus>('paused');
const time = signal<number>(timerSizes[DEFAULT_TIMER_SIZE]);

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
  time.value = timerSizes[DEFAULT_TIMER_SIZE];
  status.value = 'paused';
};

const nextTimerSize = (value: TimeSize) => {
  const currentIndex = TIMER_SIZES_LIST.indexOf(value);
  const nextIndex = currentIndex === TIMER_SIZES_LIST.length - 1 ? 0 : currentIndex + 1;

  timerSize.value = TIMER_SIZES_LIST[nextIndex] as TimeSize;
  time.value = timerSizes[timerSize.value];
};

const prevTimerSize = (value: TimeSize) => {
  const currentIndex = TIMER_SIZES_LIST.indexOf(value);
  const nextIndex = currentIndex === 0 ? TIMER_SIZES_LIST.length - 1 : currentIndex - 1;
  timerSize.value = TIMER_SIZES_LIST[nextIndex] as TimeSize;
  time.value = timerSizes[timerSize.value];
};

export const timerSignal = {
  timerSize,
  time,
  status,
  startTimer: start,
  stopTimer: stop,
  resetTimer: reset,
  nextTimer: nextTimerSize,
  prevTimer: prevTimerSize,
};
