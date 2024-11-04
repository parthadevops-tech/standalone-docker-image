import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPipe',
  standalone: true,
  pure: true,
})
export class TransformPipePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: string): string {
    return this.datePipe.transform(value, 'dd-MM-yyyy') || '';
  }
}
