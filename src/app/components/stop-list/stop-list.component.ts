import { Component, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer/timer.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.scss']
})
export class StopListComponent implements OnInit {

  stopList: number[] = [];

  constructor(private timer: TimerService) { }

  ngOnInit() {
    this.stopList = this.timer.getStopList();
    this.timer.StopListChecker.subscribe((value) => this.stopList = value);
  }

  delete(index: number): void {
    this.timer.deleteLabel(index);
  }

}
