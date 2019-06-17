import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { KEY_LIST, KEY_PAUSED } from '../../constants';
import { TimerLocalStorageService } from '../timer-local-storage/timer-local-storage.service';
import { TimerWebWorkerService } from '../timer-web-worker/timer-web-worker.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  PauseChecker: Subject<boolean> = new Subject<boolean>();
  StopListChecker: Subject<number[]> = new Subject<number[]>();
  storageSub: Subscription;

  constructor(
    private timerLS: TimerLocalStorageService,
    private timerWW: TimerWebWorkerService,
  ) {
    this.storageSub = this.timerLS.storageEvent.subscribe((e: StorageEvent) => {
      const { key, newValue } = e;
      const value = JSON.parse(newValue);
      this.onChange(key, value);
    });
  }

  getPause(): boolean {
    return this.timerLS.getPaused();
  }

  startTimer(): void {
    const isLaunchedAlready = !!this.timerLS.getTimestamp();
    if (!isLaunchedAlready) {
      this.timerLS.setTimestamp();
    }
    this.updatePause(false);
  }

  updatePause(paused): void {
    this.timerLS.updatePause(paused);
    this.timerWW.updatePause(paused);
    this.PauseChecker.next(paused);
  }

  stopTimer(): void {
    this.timerLS.stopTimer();
    this.timerWW.stopTimer();
    this.PauseChecker.next(true);
    this.StopListChecker.next([]);
  }

  getStopList(): number[] {
    return this.timerLS.getStopList();
  }

  addLabel(count: number): void {
    const newList = this.timerLS.addLabel(count);
    this.StopListChecker.next(newList);
  }

  deleteLabel(index: number): void {
    const newList = this.timerLS.deleteLabel(index);
    this.StopListChecker.next(newList);
  }

  onChange(key: string, data: any): void {
    switch (key) {
      case KEY_PAUSED:
        this.updatePause(data);
        break;
      case KEY_LIST:
        this.StopListChecker.next(data);
        break;
      case null:
        this.stopTimer();
        break;
      default:
        console.log(`${key} changed to ${data}`);
    }
  }

  stopChanges(): void {
    this.PauseChecker.complete();
    this.StopListChecker.complete();
    this.storageSub.unsubscribe();
    this.timerWW.finish();
  }
}
