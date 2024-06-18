import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Especialista } from 'src/app/models/especialista';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() listaEspecialistas!: any;

  @Output() onEnviarEsp: EventEmitter<Especialista> = new EventEmitter;

  habilitar(esp: Especialista)
  {
    esp.habilitado = !(esp.habilitado);
    this.onEnviarEsp.emit(esp);
  }
}
