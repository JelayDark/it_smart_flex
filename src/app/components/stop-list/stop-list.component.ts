import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.scss']
})
export class StopListComponent implements OnInit, OnDestroy {

  stopList: number[] = [];
  subscription: Subscription;

  constructor(private timer: TimerService) { }

  ngOnInit() {
    this.stopList = this.timer.getStopList();
    this.subscription = this.timer.StopListChecker.subscribe((value) => this.stopList = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  delete(index: number): void {
    this.timer.deleteLabel(index);
  }

}
