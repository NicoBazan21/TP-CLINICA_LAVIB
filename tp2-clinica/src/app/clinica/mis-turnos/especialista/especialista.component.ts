import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { VerComentarioComponent } from '../ver-comentario/ver-comentario.component';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';
import { FinalizarTurnoComponent } from '../finalizar-turno/finalizar-turno.component';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Encuesta } from 'src/app/models/encuesta';
import { TurnoEncuesta } from '../paciente/paciente.component';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent{

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

  aceptarTurno(id:string)
  {
    this.turnosService.aceptarTurno(this.misTurnos.find(a=>a.id == id)!);
  }

  finalizar(id: string)
  {
    this.dialog.open(FinalizarTurnoComponent,
      {
        data: this.misTurnos.find(a=>a.id == id)
      }
    )
  } 

  verResenia(id: string)
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

  
  mostrar(id: string)
  {
    $(`#${id}`).toggle();
  }
}
