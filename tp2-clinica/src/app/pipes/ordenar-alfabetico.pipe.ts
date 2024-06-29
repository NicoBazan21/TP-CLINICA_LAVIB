import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarAlfabetico'
})
export class OrdenarAlfabeticoPipe implements PipeTransform {

  transform(dato: any[], propiedad: string): any[] {
    if (!dato || !Array.isArray(dato) || dato.length === 0 || !propiedad) 
      return dato;

    return dato.sort((a, b) => {
      const datoA = a[propiedad]?.toLowerCase();
      const datoB = b[propiedad]?.toLowerCase();

      if (datoA < datoB) 
        return -1;
      else if (datoA > datoB)
        return 1;
      else 
        return 0;
    });
  }
}
