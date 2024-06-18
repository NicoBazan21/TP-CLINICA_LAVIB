import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnosComponent } from './turnos.component';
import { TurnoComponent } from './turno/turno.component';

const routes: Routes = [
  { path: '', component: TurnosComponent },
  // { path: 'seleccionar', component: TurnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
