import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import Chart, { ChartType } from 'chart.js/auto';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-turno-especialidad-grafico',
  templateUrl: './turno-especialidad-grafico.component.html',
  styleUrls: ['./turno-especialidad-grafico.component.css']
})
export class TurnoEspecialidadGraficoComponent implements OnInit{

  public chart?: Chart;
  labels: string[] = [];
  data: number[]

  constructor(private userService: UserService, private turnoService: TurnosService){}

  async ngOnInit(): Promise<void> {

    this.labels = (await this.userService.traerEspecialidadesValor()).map(a=>a['especialidad']);

    const turnos = await this.turnoService.traerTurnosValor() as Turno[];

    this.data = this.labels.map(especialidad => {
      return turnos.filter(turno => turno.especialidad == especialidad).length;
    })

    const data = {
      labels: this.labels,
      datasets: [{
        label: 'Cantidad de turnos: ',
        data: this.data,
        backgroundColor: ['#3F4B59', '#5E92BF', '#D9C5B4', '#9CC1D9', '#0D0D0D'],
        hoverOffset: 4,
        rotation: 4,
      }]
    };

    this.chart = new Chart("chart", {
      type: 'pie' as ChartType,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
      }
    })
  }

}
