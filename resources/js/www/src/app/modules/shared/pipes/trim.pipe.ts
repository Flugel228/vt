import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(string: string, length: number): string {
    return string.length <= length ? string : `${string.slice(0, length - 3)}...`;
  }

}
