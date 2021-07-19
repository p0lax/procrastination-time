import rain from './../assets/images/rain_0.jpg';
import morning from './../assets/images/morning_0.jpg';
import train from './../assets/images/train_0.jpg';

import rainSound from 'url:./../assets/sounds/rain_0.mp3';
import trainSound from 'url:./../assets/sounds/train_0.mp3';
import morningSound from 'url:./../assets/sounds/morning_0.mp3';

// img: `https://pixabay.com/api/?key=12966156-34ff2c30778608c047becbead&id=1283073`,

export const CARDS = [
  {
    id: 'rain',
    title: 'Rain',
    description: 'Sounds of the thunder',
    img: rain,
    sound: rainSound,
  },
  {
    id: 'morning',
    title: 'Morning',
    description: 'Morning sunlight',
    img: morning,
    sound: morningSound,
  },
  {
    id: 'train',
    title: 'Train',
    description: 'Sounds of traveling via train',
    img: train,
    sound: trainSound,
  },
];
