import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { MisTurnosRoutingModule } from './mis-turnos-routing.module';
import { MisTurnosComponent } from './mis-turnos.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteComponent } from './paciente/paciente.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VerComentarioComponent } from './ver-comentario/ver-comentario.component';
import { FinalizarTurnoComponent } from './finalizar-turno/finalizar-turno.component';
import { AdminComponent } from './admin/admin.component';
import { CalificarAtencionComponent } from './calificar-atencion/calificar-atencion.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';


@NgModule({
  declarations: [
    MisTurnosComponent,
    PacienteComponent,
    EspecialistaComponent,
    CancelarTurnoComponent,
    VerComentarioComponent,
    FinalizarTurnoComponent,
    AdminComponent,
    CalificarAtencionComponent,
    HistoriaClinicaComponent
  ],
  imports: [
    MisTurnosRoutingModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MisTurnosModule { }
