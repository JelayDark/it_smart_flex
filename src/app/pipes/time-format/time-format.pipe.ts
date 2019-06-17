import { Pipe, PipeTransform } from '@angular/core';
import { getMiliSeconds, getMinutes, getSeconds } from '../../utils';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const mm = this.pad(getMinutes(value));
    const ss = this.pad(getSeconds(value));
    const ms = this.pad(getMiliSeconds(value));
    return `${mm}:${ss}.${ms}`;
  }

  private pad(digit: number) {
    return `${digit <= 9 ? '0' : ''}${digit}`;
  }
}
