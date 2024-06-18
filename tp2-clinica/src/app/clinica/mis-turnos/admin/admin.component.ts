import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { CancelarTurnoComponent } from '../cancelar-turno/cancelar-turno.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @Input() misTurnos: Turno[] = [];

  constructor(private dialog: MatDialog){}
  
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
}
