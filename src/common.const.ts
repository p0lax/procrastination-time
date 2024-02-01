/* eslint-disable import/no-unresolved */
import { CardType } from 'services/types';
import rain from './assets/sounds/rain_0.mp3?url';
import forest from './assets/sounds/forest_0.mp3?url';
import morning from './assets/sounds/morning_0.mp3?url';
import train from './assets/sounds/train_0.mp3?url';
import winter from './assets/sounds/winter_0.mp3?url';
import road from './assets/sounds/road_0.mp3?url';
import sea from './assets/sounds/sea_0.mp3?url';
import village from './assets/sounds/village_0.mp3?url';
import wet_road from './assets/sounds/wet_road_0.mp3?url';
import dinner from './assets/sounds/dinner_0.mp3?url';
import train_station from './assets/sounds/train_station_0.mp3?url';

export const CARDS: CardType[] = [
  {
    id: 'rain',
    title: 'Rain',
    description: 'Sounds of the thunder',
    soundURL: rain,
  },
  {
    id: 'morning',
    title: 'Morning',
    description: 'Morning sunlight',
    soundURL: morning,
  },
  {
    id: 'train',
    title: 'Train',
    description: 'Sounds of traveling via train',
    soundURL: train,
  },
  {
    id: 'forest',
    title: 'Forest',
    description: 'Sounds of the forest',
    soundURL: forest,
  },
  {
    id: 'winter',
    title: 'Winter Storm',
    description: 'Sounds of the winter storm',
    soundURL: winter,
  },
  {
    id: 'road',
    title: 'Busy Road',
    description: 'Sounds of the busy road',
    soundURL: road,
  },
  {
    id: 'sea',
    title: 'Sea beach',
    description: 'Sounds of the Caribean sea',
    soundURL: sea,
  },
  {
    id: 'village',
    title: 'Evening in the village',
    description: 'Sounds of the evening village',
    soundURL: village,
  },
  {
    id: 'wet_road',
    title: 'Road after heavy rain',
    description: 'Sounds of the the cars on the road after a heavy rain',
    soundURL: wet_road,
  },
  {
    id: 'dinner',
    title: 'People in the restaurant',
    description: 'Sounds of the the restaurant',
    soundURL: dinner,
  },
  {
    id: 'train_station',
    title: 'Saint-Petersburg trains station',
    description: 'Sounds of the Saint-Petersburg train station',
    soundURL: train_station,
  },
];

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
