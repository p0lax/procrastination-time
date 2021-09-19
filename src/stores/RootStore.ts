import TimerStore from './TimerStore';

export class RootStore {
  timerStore: TimerStore;

  constructor() {
    this.timerStore = new TimerStore(this);
  }
}
