import { makeObservable, observable, action } from 'mobx';
import { roundOff } from '~src/utils/math';

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

export class AudioFlowStore {
  rootStore;
  private audio = null;
  private context = null;
  private biquadFilter = null;
  isPlaying = false;
  volume: number = DEFAULT_VOLUME;

  constructor(rootStore) {
    makeObservable(this, {
      isPlaying: observable,
      volume: observable,
      toggle: action,
      levelUp: action,
      levelDown: action,
      reset: action,
    });
    this.rootStore = rootStore;
  }

  init = (url: string) => {
    this.audio = new Audio(url);
  };

  addContext = () => {};

  toggle = () => {
    this.isPlaying = !this.isPlaying;
    if (!this.isPlaying) {
      this.audio.pause();
      return;
    }
    this.audio.play();
  };

  levelUp = () => {
    if (this.volume < 1) {
      const value = roundOff(this.volume + VOLUME_STEP, 1);
      this.audio.volume = value;
      this.volume = value;
    }
  };

  levelDown = () => {
    if (this.volume > 0) {
      const value = roundOff(this.volume - VOLUME_STEP, 1);
      this.volume = value;
      this.audio.volume = value;
    }
  };

  reset = () => {
    this.audio.pause();
    this.audio = null;
    this.volume = DEFAULT_VOLUME;
    this.isPlaying = false;
    this.context = null;
  };
}
