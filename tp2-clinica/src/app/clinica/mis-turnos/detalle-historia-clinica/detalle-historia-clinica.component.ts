import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta';
import { Turno } from 'src/app/models/turnos';
import { EncuestaService } from 'src/app/services/encuesta.service';


@Component({
  selector: 'app-detalle-historia-clinica',
  templateUrl: './detalle-historia-clinica.component.html',
  styleUrls: ['./detalle-historia-clinica.component.css']
})
export class DetalleHistoriaClinicaComponent {
  @Input() turno?: TurnoEncuesta;
  @Input() url_foto?: string;
  @Output() onVolver = new EventEmitter<boolean>();


  ngOnInit(): void {
  }

  volver()
  {
    this.onVolver.emit(false);
  }
}
export interface TurnoEncuesta
{
  turno: Turno,
  url_foto: string,
  encuesta: Encuesta
}