import { Component, Input, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import {MatDialog} from '@angular/material/dialog';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';
import { VerComentarioComponent } from '../ver-comentario/ver-comentario.component';
import { CalificarAtencionComponent } from '../calificar-atencion/calificar-atencion.component';
import { Encuesta } from 'src/app/models/encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent{

  @Input() misTurnos: Turno[] = [];

  turnosEncuesta: TurnoEncuesta[] = [];
  renderizar: boolean = false;
  constructor(private turnosService: TurnosService, private encuestaService: EncuestaService, private dialog: MatDialog){}

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

  cancelarTurno(id: string)
  {
    this.dialog.open(CancelarTurnoComponent,
      {
        data: {
          misTurnos: this.misTurnos,
          id: id
        }
      }
    );
  }

  verComentarioCancelado(id: string)
  {
    this.dialog.open(VerComentarioComponent, 
      {
        data: {
          data: this.misTurnos.find(a=>a.id == id)?.resenia,
          campo: 'Comentario'
        }
      })
  }
  verResenia(id:string)
  {
    this.dialog.open(VerComentarioComponent,
      {
        data: {
          data: this.misTurnos.find(a=>a.id == id)?.resenia,
          campo: 'Resenia'
        }
      }
    )
  }

  calificarAtencion(id:string)
  {
    this.dialog.open(CalificarAtencionComponent,
      {
        data: {
          misTurnos: this.misTurnos,
          id: id
        }
      }
    )
  }

  verComentarioAtencion(id:string)
  {
    this.dialog.open(VerComentarioComponent,
      {
        data: {
          data: this.misTurnos.find(a=>a.id == id)?.comentarioAtencion,
          campo: 'Calificacion de atencion'
        }
      }
    )
  }

  mostrar(id: string)
  {
    $(`#${id}`).toggle();
  }
}

export interface TurnoEncuesta
{
  turno: Turno,
  encuesta: Encuesta
}