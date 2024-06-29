import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLimpiarFiltro]'
})
export class LimpiarFiltroDirective {

  constructor() { }

  @HostListener('click') onClick() {
    $('table tr').each((i, tr) => {
      let dataFiltro = $(tr);

      if (dataFiltro && dataFiltro.hasClass("ocultarRow")) {
        dataFiltro.removeClass("ocultarRow");
      }
    });
  }
}
