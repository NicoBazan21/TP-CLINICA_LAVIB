import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';
import { VerComentarioComponent } from '../ver-comentario/ver-comentario.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

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
}
