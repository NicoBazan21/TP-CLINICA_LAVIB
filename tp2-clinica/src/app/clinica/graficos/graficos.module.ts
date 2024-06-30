import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosRoutingModule } from './graficos-routing.module';
import { TurnoEspecialidadGraficoComponent } from './turno-especialidad-grafico/turno-especialidad-grafico.component';



@NgModule({
  declarations: [
    
  
    TurnoEspecialidadGraficoComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ]
})
export class GraficosModule { }
