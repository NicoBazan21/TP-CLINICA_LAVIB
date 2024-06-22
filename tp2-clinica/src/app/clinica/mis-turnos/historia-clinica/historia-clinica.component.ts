import { Component, Input } from '@angular/core';
import { Turno } from 'src/app/models/turnos';
import { TurnoEncuesta } from '../paciente/paciente.component';
import { TurnosService } from 'src/app/services/turnos.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Encuesta } from 'src/app/models/encuesta';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent {

  @Input() misTurnos: Turno[] = [];

  renderizar: boolean = false;
  turnosEncuesta: TurnoEncuesta[] = [];

  constructor(private turnosService: TurnosService, private encuestaService: EncuestaService){}


  ngOnChanges(): void {
    this.turnosEncuesta = [];
    let aux: TurnoEncuesta[] = [];
    this.misTurnos.forEach(async (turno)=> {
      await this.encuestaService.traerEncuesta(turno.id).then((encuesta)=>{
        let TurnoEncuesta;
        if(encuesta.length > 0)
          TurnoEncuesta = {turno: turno, encuesta: encuesta[0]};
        else
          TurnoEncuesta = {turno:turno, encuesta: new Encuesta()}
        
        aux.push(TurnoEncuesta);
      })
    });
    this.turnosEncuesta = aux;
    this.renderizar = true;
  }
}
