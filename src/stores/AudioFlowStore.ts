import { makeObservable, observable, action } from 'mobx';
import { getSound } from '~src/services/audio.service';
import { roundOff } from '~src/utils/math';

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

export class AudioFlowStore {
  rootStore;
  private audio = null;
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

  init = (id: string) => {
    this.audio = new Audio(`/assets/sounds/${id}_0.mp3`);
  };

  addContext = async () => {
    const context = new AudioContext();
    const source1 = context.createBufferSource();
    const source2 = context.createBufferSource();
    const file1 = await getSound(`train_0`);
    const file2 = await getSound(`sea_0`);
    console.log('file1Buffer = ', file1);
    const file1Buffer = await context.decodeAudioData(file1.data);
    const file2Buffer = await context.decodeAudioData(file2.data);
    source1.buffer = file1Buffer;
    source2.buffer = file2Buffer;
    source1.connect(context.destination);
    source2.connect(context.destination);
    source1.start();
    source2.start();
  };

  toggle = () => {
    this.isPlaying = !this.isPlaying;
    if (!this.isPlaying) {
      this.audio.pause();
      return;
    }
    // this.audio.play();
    this.addContext();
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
