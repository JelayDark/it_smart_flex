import { Component, Input, OnChanges } from '@angular/core';
import { getMiliSeconds, getMinutes, getSeconds } from '../../utils';
import { digitsActive } from '../../constants';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss']
})
export class WatchesComponent implements OnChanges {
  @Input() ticks: number;
  aciveMM: number[][] = [];
  aciveSS: number[][] = [];
  aciveMS: number[][] = [];
  array = Array(7).fill(1).map((_, i) => i + 1);

  ngOnChanges(changes): void {
    const mm = getMinutes(this.ticks);
    const ss = getSeconds(this.ticks);
    const ms = getMiliSeconds(this.ticks);
    this.aciveMM = [digitsActive[Math.trunc( mm / 10)], digitsActive[ mm % 10]];
    this.aciveSS = [digitsActive[Math.trunc( ss / 10)], digitsActive[ ss % 10]];
    this.aciveMS = [digitsActive[Math.trunc( ms / 10)], digitsActive[ ms % 10]];
  }
}
