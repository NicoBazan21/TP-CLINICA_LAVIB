import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './graficos.component';
import { TurnoEspecialidadGraficoComponent } from './turno-especialidad-grafico/turno-especialidad-grafico.component';

const routes: Routes = [
  { path: '', component: GraficosComponent },
  { path: 'turnoEspecialidad', component: TurnoEspecialidadGraficoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
