import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { VerComentarioComponent } from '../ver-comentario/ver-comentario.component';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';
import { FinalizarTurnoComponent } from '../finalizar-turno/finalizar-turno.component';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent {

  @Input() misTurnos: Turno[] = [];

  constructor(private turnosService: TurnosService, private dialog: MatDialog){}


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
}
