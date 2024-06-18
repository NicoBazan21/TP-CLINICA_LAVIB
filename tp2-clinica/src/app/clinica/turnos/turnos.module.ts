import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { TurnosComponent } from './turnos.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { TurnoComponent } from './turno/turno.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    TurnosComponent,
    EspecialidadComponent,
    EspecialistaComponent,
    TurnoComponent,
    BuscadorComponent,
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatAutocompleteModule,
  ]
})
export class TurnosModule { }
