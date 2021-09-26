import { makeObservable, observable, action } from 'mobx';
import { getSound } from '~src/services/audio.service';
import { roundOff } from '~src/utils/math';

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

export class AudioFlowStore {
  rootStore;
  private audio = null;
  private audioContext = null;
  private audioSource = null;
  private audioGain = null;
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

  initContext = async (id: string) => {
    this.audioContext = new AudioContext();
    this.audioSource = this.audioContext.createBufferSource();
    this.audioGain = this.audioContext.createGain();
    this.audioSource.loop = true;
    this.audioGain.gain.value = 1;
    const file = await getSound(`${id}_0`);
    const fileBuffer = await this.audioContext.decodeAudioData(file.data);
    this.audioSource.buffer = fileBuffer;
    this.audioSource.connect(this.audioGain);
    this.audioGain.connect(this.audioContext.destination);
  };

  toggle = () => {
    this.isPlaying = !this.isPlaying;
    if (!this.isPlaying) {
      this.audioSource.stop();
      return;
    }
    this.audioSource.start();
  };

  levelUp = () => {
    if (this.volume < 1) {
      const value = roundOff(this.volume + VOLUME_STEP, 1);
      this.audioGain.gain.value = value;
      this.volume = value;
    }
  };

  levelDown = () => {
    if (this.volume > 0) {
      const value = roundOff(this.volume - VOLUME_STEP, 1);
      this.audioGain.gain.value = value;
      this.volume = value;
    }
  };

  reset = () => {
    if (this.isPlaying) {
      this.audioSource.stop();
    }
    this.volume = DEFAULT_VOLUME;
    this.isPlaying = false;
    this.audioContext = null;
    this.audioSource = null;
    this.audioGain = null;
  };
}
