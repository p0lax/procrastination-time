import { MINUTE } from 'common.const';

export const timerSizes = {
  '5': 5 * MINUTE,
  '10': 10 * MINUTE,
  '15': 15 * MINUTE,
  '25': 25 * MINUTE,
  '50': 50 * MINUTE,
} as const;

export type TimeSize = keyof typeof timerSizes;

export type TimerStatus = 'running' | 'paused';
