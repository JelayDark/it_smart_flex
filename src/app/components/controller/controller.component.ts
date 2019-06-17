import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';
import { TimerWebWorkerService } from '../../services/timer-web-worker/timer-web-worker.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy {
  ticks = 0;
  paused = true;

  constructor(
    private timer: TimerService,
    private timerWW: TimerWebWorkerService,
  ) {}

  ngOnInit() {
    this.paused = this.timer.getPause();
    this.timerWW.TimerCounter.subscribe((ticks) => this.ticks = ticks);
    this.timer.PauseChecker.subscribe((paused) => this.paused = paused);
  }

  ngOnDestroy() {
    // this.storage.stopSubscription();
    // @TODO: stop subscribes!
  }

  control(): void {
    this.paused ? this.start() : this.pause();
  }

  start(): void {
    this.timer.startTimer();
  }

  pause(): void {
    this.timer.updatePause(true);
  }

  save(): void {
    this.timer.addLabel(this.ticks);
  }

  stop(): void {
    this.timer.stopTimer();
  }
}
