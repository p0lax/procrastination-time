import rain from './../assets/images/rain_0.jpg';
import morning from './../assets/images/morning_0.jpg';
import train from './../assets/images/train_0.jpg';
import forest from './../assets/images/forest_0.jpg';
import winter from './../assets/images/winter_0.jpg';
import road from './../assets/images/road_0.jpg';
import wetRoad from './../assets/images/wet_road_0.jpg';
import dinner from './../assets/images/dinner_0.jpg';

import rainSound from 'url:./../assets/sounds/rain_0.mp3';
import trainSound from 'url:./../assets/sounds/train_0.mp3';
import morningSound from 'url:./../assets/sounds/morning_0.mp3';
import forestSound from 'url:./../assets/sounds/forest_1.mp3';
import winterSound from 'url:./../assets/sounds/winter_0.mp3';
import roadSound from 'url:./../assets/sounds/road_0.mp3';
import wetRoadSound from 'url:./../assets/sounds/wet_road_0.mp3';
import dinnerSound from 'url:./../assets/sounds/dinner_0.mp3';

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
  {
    id: 'forest',
    title: 'Forest',
    description: 'Sounds of the forest',
    img: forest,
    sound: forestSound,
  },
  {
    id: 'winter',
    title: 'Winter Storm',
    description: 'Sounds of the winter storm',
    img: winter,
    sound: winterSound,
  },
  {
    id: 'road',
    title: 'Busy Road',
    description: 'Sounds of the busy road',
    img: road,
    sound: roadSound,
  },
  {
    id: 'wet_road',
    title: 'Road after heavy rain',
    description: 'Sounds of the the cars on the road after a heavy rain',
    img: wetRoad,
    sound: wetRoadSound,
  },
  {
    id: 'dinner',
    title: 'People in the restaurant',
    description: 'Sounds of the the restaurant',
    img: dinner,
    sound: dinnerSound,
  },
];
