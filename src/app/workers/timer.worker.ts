/// <reference lib="webworker" />
import { BehaviorSubject, interval, NEVER } from 'rxjs';
import { INIT, RESET_TIME, PAUSE } from '../constants';
import { switchMap } from 'rxjs/operators';

let ticks = 0;
const paused$ = new BehaviorSubject(true);

addEventListener('message', ({ data }) => {
  console.log('worker got message: ', data);
  const { key, value } = data;
  switch (key) {
    case INIT: {
      const { timestamp, paused } = value;
      ticks = timestamp ? Math.trunc((Date.now() - timestamp) / 10) : 0;
      initTimer();
      paused ? postMessage(ticks) : paused$.next(paused);
      break;
    }
    case RESET_TIME:
      ticks = 0;
      paused$.next(true);
      postMessage(0);
      break;
    case PAUSE:
      paused$.next(value);
      break;
    default:
      console.log('i got message');
  }
});

const initTimer = () => {
  paused$.pipe(
    switchMap((pause) => pause ? NEVER : interval(10))
  ).subscribe(() => {
    ticks++;
    postMessage(ticks);
  });
};


