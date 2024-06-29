import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datoImpotante'
})
export class DatoImpotantePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) 
      return '';
    
    return value.toUpperCase();
  }
}
