import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEdad'
})
export class FormatEdadPipe implements PipeTransform {

  private unidades = ['', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];
  private decenas = ['Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve'];
  private decenasNormales = ['Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
  private centenas = ['Cien', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

  transform(value: number): string {
    let anios = ' años.'
    if (value === 0) 
      return 'Cero' + anios;

    if (value < 10) 
      return this.unidades[value] + anios;
    

    if (value < 20)
      return this.decenas[value - 10] + anios;
    
    if (value < 30) 
    {
      const unidad = value % 10;
      return 'Veinti' + this.unidades[unidad] + anios;
    }

    if (value < 100) 
    {
      const decena = Math.floor(value / 10);
      const unidad = value % 10;
      const textoDecena = decena === 2 ? 'Veinti' : this.decenasNormales[decena - 2];
      const textoUnidad = unidad !== 0 ? ' y ' + this.unidades[unidad] : '';
      return textoDecena + textoUnidad  + anios;
    }

    if (value < 1000) 
    {
      const centena = Math.floor(value / 100);
      const resto = value % 100;
      const textoCentena = centena === 1 && resto === 0 ? 'Cien' : this.centenas[centena - 1];
      const textoResto = resto !== 0 ? ' ' + this.transform(resto) : '';
      return textoCentena + textoResto + anios;
    }

    return '';
  } 
}
