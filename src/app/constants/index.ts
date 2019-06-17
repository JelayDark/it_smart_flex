// local-storage keys
export const KEY_LIST = 'stop_list';
export const KEY_PAUSED = 'paused';
export const KEY_LAUNCHED = 'launched';
export const KEY_TIMESTAMP = 'timestamp';

// web-worker events
export const PAUSE = 'PAUSE';
export const INIT = 'INIT';
export const RESET_TIME = 'RESET_TIME';

// numbers of active parts for every number
export const digitsActive = [
  [1, 2, 3, 5, 6, 7],
  [3, 6],
  [1, 3, 4, 5, 7],
  [1, 3, 4, 6, 7],
  [2, 3, 4, 6],
  [1, 2, 4, 6, 7],
  [1, 2, 4, 5, 6, 7],
  [1, 3, 6],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 6, 7]
];
