import { AudioFlowStore } from './AudioFlowStore';

export class RootStore {
  audioStore: AudioFlowStore;

  constructor() {
    this.audioStore = new AudioFlowStore(this);
  }
}
