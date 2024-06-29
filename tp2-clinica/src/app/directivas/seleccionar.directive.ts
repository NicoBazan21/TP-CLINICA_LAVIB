import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSeleccionar]'
})
export class SeleccionarDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    $(this.el.nativeElement).toggleClass('gris');
  }
  
}
