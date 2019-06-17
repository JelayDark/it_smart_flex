import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const mm = this.getMinutes(value);
    const ss = this.getSeconds(value);
    const ms = this.getMiliSeconds(value);
    return `${mm}:${ss}.${ms}`;
  }

  private getSeconds(ticks: number) {
    return this.pad(Math.floor(ticks / 100) % 60);
  }

  private getMiliSeconds(ticks: number) {
    return this.pad(ticks % 100);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 100 / 60)) % 60);
  }

  private pad(digit: number) {
    return `${digit <= 9 ? '0' : ''}${digit}`;
  }
}
