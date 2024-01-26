import { signal } from "@preact/signals"
import { getSound } from "services/audio.service";
import { roundOff } from "utils/math";

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

let audioContext : AudioContext | undefined;
let audioSource: AudioBufferSourceNode;
let audioGain: GainNode;
let isInit = true;

const volume = signal(DEFAULT_VOLUME);
const isPlaying = signal(false);

const toggleAudio = async (id?: string) => {
  if (isInit) {
    await initAudio(id);
    audioSource.start();
    audioContext?.suspend();
    isInit = false;
  }
  
  if (isPlaying.value) {
    audioContext?.suspend();
    isPlaying.value = false;
    return;
  }

  audioContext?.resume();
  isPlaying.value = true;
}

const levelUp = () => {
  if (volume.value < 1) {
    const value = roundOff(volume.value + VOLUME_STEP, 1);
    audioGain.gain.value = value;
    volume.value = value;
  }
}

const levelDown = () => {
  if (volume.value > 0) {
    const value = roundOff(volume.value - VOLUME_STEP, 1);
    audioGain.gain.value = value;
    volume.value = value;
  }
}

const initAudio = async (id?: string) => {
  try {
    audioContext = new AudioContext();
    audioSource = audioContext.createBufferSource();
    audioGain = audioContext.createGain();
    audioSource.loop = true;
    audioGain.gain.value = 1;
  
    const file = await getSound(`${id}_0`);
    const fileBuffer = await audioContext.decodeAudioData(file.data);
    audioSource.buffer = fileBuffer;
    audioSource.connect(audioGain);
    audioGain.connect(audioContext.destination);
  } catch (ex) {
    console.error(ex);
  }

}

const resetAudio = () => {
  console.log('RESET');
  if (!isInit) {
    audioContext?.close();
    audioSource?.stop();
    isInit = true;
  }
  isPlaying.value = false;
  volume.value = DEFAULT_VOLUME;
}

export const audioSignal = {
  isPlaying,
  volume,
  initAudio,
  toggleAudio,
  levelUp, 
  levelDown,
  reset: resetAudio
}