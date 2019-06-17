import { Injectable } from '@angular/core';
import { INIT, PAUSE, RESET_TIME } from '../../constants';
import { Subject } from 'rxjs';
import { TimerLocalStorageService } from '../timer-local-storage/timer-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TimerWebWorkerService {
  private TimerWorker: Worker;

  TimerCounter = new Subject<number>();

  constructor(private timerLS: TimerLocalStorageService) {
    if (typeof Worker !== 'undefined') {
      this.TimerWorker = new Worker('../../workers/timer.worker', { type: 'module' });
      this.TimerWorker.onmessage = ({ data }) => this.TimerCounter.next(data);

      const paused = this.timerLS.getPaused();
      const timestamp = this.timerLS.getTimestamp();

      this.send(INIT, { paused, timestamp });
    } else {
      console.error('Sorry, Not That Time. U have no Workers');
    }
  }

  send(key: string, value?: any): void {
    this.TimerWorker.postMessage({ key, value });
  }

  updatePause(pause: boolean): void {
    this.send(PAUSE, pause);
  }

  stopTimer(): void {
    this.updatePause(true);
    this.send(RESET_TIME);
  }

  finish(): void {
    this.TimerCounter.complete();
    this.TimerWorker.terminate();
  }
}
