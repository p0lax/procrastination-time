import { AudioFlowStore } from './AudioFlowStore';
import TimerStore from './TimerStore';

export class RootStore {
  timerStore: TimerStore;
  audioStore: AudioFlowStore;

  constructor() {
    this.timerStore = new TimerStore(this);
    this.audioStore = new AudioFlowStore(this);
  }
}
