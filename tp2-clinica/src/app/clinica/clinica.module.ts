import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicaRoutingModule } from './clinica-routing.module';
import { ClinicaComponent } from './clinica.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MisHorariosComponent } from './mis-horarios/mis-horarios.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HoverDirective } from '../directivas/hover.directive';
import { SeleccionarDirective } from '../directivas/seleccionar.directive';


@NgModule({
  declarations: [
    ClinicaComponent,
    HomeComponent,
    ProfileComponent,
    SidenavComponent,
    MisHorariosComponent,
    HoverDirective,
    SeleccionarDirective
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
    MatToolbarModule, MatIconModule, MatListModule,
    ReactiveFormsModule,FormsModule, CarouselModule
  ],
  exports:[HoverDirective]
})
export class ClinicaModule { }
