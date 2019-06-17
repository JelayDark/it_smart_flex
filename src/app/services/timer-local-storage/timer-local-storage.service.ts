import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { KEY_LIST, KEY_PAUSED, KEY_TIMESTAMP } from '../../constants';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

const fixBool = (val: any) => typeof val === 'boolean' ? val : true;
// @TODO: key in LocalStorage paused change to key ticking to have false as initial value
@Injectable({
  providedIn: 'root'
})
export class TimerLocalStorageService {

  storageEvent = fromEvent(window, 'storage').pipe(
    filter((e: StorageEvent) => !e.key || e.oldValue !== e.newValue));

  constructor(private ls: LocalStorageService) { }

  updatePause(pause: boolean): void {
    this.ls.set(KEY_PAUSED, pause);
  }

  setTimestamp(): void {
    this.ls.set(KEY_TIMESTAMP, Date.now());
  }

  stopTimer(): void {
    this.ls.clear();
  }

  getStopList(): number[] {
    return this.ls.get(KEY_LIST) || [];
  }

  getTimestamp(): number {
    return this.ls.get(KEY_TIMESTAMP);
  }

  getPaused(): boolean {
    return fixBool(this.ls.get(KEY_PAUSED));
  }

  addLabel(count: number): number[] {
    const list = this.getStopList();
    list.unshift(count);
    this.ls.set(KEY_LIST, list);
    return list;
  }

  deleteLabel(index: number): number[] {
    const list = this.getStopList();
    list.splice(index, 1);
    this.ls.set(KEY_LIST, list);
    return list;
  }
}
