import { signal } from "@preact/signals"
import { getSound } from "services/audio.service";
import { roundOff } from "utils/math";

const VOLUME_STEP = 0.1;
const DEFAULT_VOLUME = 0.5;

let audioContext = new AudioContext();
let audioSource: AudioBufferSourceNode;
let audioGain: GainNode;
const volume = signal(DEFAULT_VOLUME);
const isPlaying = signal(false);

const toggleAudio = async () => {
  console.log('PLAY');
  if (isPlaying.value) {
    audioSource.stop();
    isPlaying.value = false;
  }
  audioSource.start();
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

const setSong = async (id?: string) => {
  // const audioContext = new AudioContext();
  audioSource = audioContext.createBufferSource();
  audioGain = audioContext.createGain();
  audioSource.loop = true;
  audioGain.gain.value = 1;
  const file = await getSound(`${id}_0`);
  const fileBuffer = await audioContext.decodeAudioData(file.data);
  audioSource.buffer = fileBuffer;
  audioSource.connect(audioGain);
  audioGain.connect(audioContext.destination);
}

const reset = () => {
  audioSource.stop();
  isPlaying.value = false;
  volume.value = DEFAULT_VOLUME;
}

export const audioSignal = {
  volume,
  setSong,
  toggleAudio,
  levelUp, 
  levelDown,
  reset
}