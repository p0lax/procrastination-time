import { COUNTDOWN_SIZE } from './../sections/constants';
import { makeObservable, observable, action } from 'mobx';
import { SECOND } from 'sections/constants';
import { RootStore } from './RootStore';

export type TimerStatus = 'running' | 'paused';

class TimerStore {
  rootStore;
  timerId: ReturnType<typeof setTimeout> | undefined;
  countdown: number = COUNTDOWN_SIZE;
  status: TimerStatus = 'paused';

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      timerId: observable,
      countdown: observable,
      status: observable,
      decrement: action,
      start: action,
      stop: action,
      reset: action,
    });
    this.rootStore = rootStore;
  }

  start = () => {
    this.timerId = setInterval(() => {
      this.decrement();
    }, SECOND);
    this.status = 'running';
  };

  stop = () => {
    clearInterval(this.timerId);
    this.status = 'paused';
  };

  decrement = () => {
    this.countdown -= SECOND;
  };

  reset = () => {
    clearInterval(this.timerId);
    this.countdown = COUNTDOWN_SIZE;
    this.status = 'paused';
  };
}

export default TimerStore;
