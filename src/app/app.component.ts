import { TimerService } from './services/timer/timer.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(private timer: TimerService) {}

  ngOnDestroy(): void {
    this.timer.stopChanges();
  }
}
