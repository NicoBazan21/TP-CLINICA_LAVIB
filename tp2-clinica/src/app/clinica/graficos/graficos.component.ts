import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Log } from 'src/app/models/log';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  logs?: any[] = [];
  turnosPorDia: Tupla[];
  turnosPorEsp: Tupla[];
  turnosSolicitados: Tupla[];
  turnosFinalizados: Tupla[];

  constructor(private userService: UserService, private turnoService: TurnosService){}

  async ngOnInit(): Promise<void> {
    this.userService.traerLogs().subscribe((data)=>
      {
        this.logs = data;
      });

    const turnos = await this.turnoService.traerTurnosValor() as Turno[];

    this.grafTurnsPorEspecialidad(turnos);
    this.grafTurnosPorDia(turnos);
    this.grafTurnosSolicitadoPorMedico(turnos);
    this.grafTurnosFinalizadosPorMedico(turnos);
  }

  fileName = "graficos.xlsx";

  exportarExcelGrafico(data: Tupla[])
  {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    
    XLSX.writeFile(wb,this.fileName);
  }

  exportarExcel()
  {
    var data = document.getElementById('excel')!;

    const ws = XLSX.utils.table_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    
    XLSX.writeFile(wb,this.fileName);
  }

  exportarPdf(titulo: string, id: string) {
    const data = document.getElementById(id)!;
    
    const iconUrl = '../../../assets/img/hospital.png';
  
    html2canvas(data).then(canvas => {
      const contentDataUrl = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      pdf.addImage(iconUrl, 'PNG', 10, 10, 30, 30);
      
      pdf.setFontSize(18);
      pdf.setTextColor(40, 40, 40);
      pdf.text(titulo, 50, 20); // Posición (50, 20)
      let date = new Date();
      pdf.setFontSize(14);
      pdf.setTextColor(60, 60, 60);
      pdf.text('Fecha al: ' + date.toLocaleDateString(), 50, 30);
      
      const positionY = 50;
      pdf.addImage(contentDataUrl, 'PNG', 0, positionY, 210, 100);
      
      pdf.save('graficos.pdf');
    });
  }

  async grafTurnosFinalizadosPorMedico(array: Turno[])
  {
    const turnos = array.map(a=>{a.fecha = this.parseFecha(a.fecha); return a});
    const hoy = new Date();
    const turnosFiltrados = array.filter(turno => {
      const parts = turno.fecha.split('/');
      const fechaTurno = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      return fechaTurno > hoy;
    });

    const labelsSet = new Set<string>();

    turnosFiltrados.forEach(turno => {
      labelsSet.add(turno.nombreCompletoEspecialista);
    });

    const labels = Array.from(labelsSet);

    const data = labels.map(esp => 
      turnosFiltrados.filter(turno => turno.nombreCompletoEspecialista == esp && turno.estadoTurno == 'Finalizado').length
    )
    this.turnosFinalizados = this.crearTupla(labels, data);
    const datos = {
      labels: labels,
      datasets: [{
        label: 'Turnos solicitados: ',
        data: data,
        backgroundColor: [
          'rgb(89, 123, 156)',
          'rgb(250, 200, 150)',
          'rgb(123, 45, 67)',
          'rgb(234, 56, 78)',
          'rgb(12, 34, 56)',
        ],
        hoverOffset: 4
      }]
    };

    const chart: Chart = new Chart("turnosFinaliz", {
      type:'bar',
      data: datos,
    })
  }

  async grafTurnosSolicitadoPorMedico(array: Turno[])
  {
    const turnos = array.map(a=>{a.fecha = this.parseFecha(a.fecha); return a});
    const hoy = new Date();
    const turnosFiltrados = array.filter(turno => {
      const parts = turno.fecha.split('/');
      const fechaTurno = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      return fechaTurno > hoy;
    });

    const labelsSet = new Set<string>();

    turnosFiltrados.forEach(turno => {
      labelsSet.add(turno.nombreCompletoEspecialista);
    });

    const labels = Array.from(labelsSet);

    const data = labels.map(esp => 
      turnosFiltrados.filter(turno => turno.nombreCompletoEspecialista == esp).length
    )

    this.turnosSolicitados = this.crearTupla(labels, data);
    const datos = {
      labels: labels,
      datasets: [{
        label: 'Turnos solicitados: ',
        data: data,
        backgroundColor: [
          'rgb(123, 45, 67)',
          'rgb(234, 56, 78)',
          'rgb(12, 34, 56)',
          'rgb(89, 123, 156)',
          'rgb(250, 200, 150)'
        ],
        hoverOffset: 4
      }]
    };

    const chart: Chart = new Chart("turnosSolic", {
      type:'bar',
      data: datos,
    })
  }

  async grafTurnosPorDia(turnos: Turno[])
  {
    const labelsSet = new Set<string>();

    turnos.forEach(turno=> labelsSet.add(turno.fecha));
    const labels = Array.from(labelsSet);
    const data: number[] = labels.map(dia =>{
      return turnos.filter(turno => turno.fecha == dia).length;
    })

    this.turnosPorDia = this.crearTupla(labels, data);

    const datos = {
      labels: labels,
      datasets: [{
        label: 'Cantidad de turnos: ',
        data: data,
        backgroundColor: [
          'rgba(213, 229, 242, 0.4)',  // #D5E5F2
          'rgba(4, 217, 217, 0.4)',    // #04D9D9
          'rgba(4, 191, 157, 0.4)',    // #04BF9D
          'rgba(3, 140, 115, 0.4)',    // #038C73
          'rgba(115, 86, 61, 0.4)',    // #73563D
          'rgba(242, 192, 162, 0.4)',  // #F2C0A2
          'rgba(242, 5, 5, 0.4)'       // #F20505
        ],
        borderColor: ['#A60D0D','#A60D0D','#A60D0D','#A60D0D','#A60D0D','#A60D0D','#A60D0D'
        ],
        borderWidth: 1,
        fill: false,
        tension: 0.1
      }]
    };
    
    const chart: Chart = new Chart("turnosPorDia", {
      type:'line',
      data: datos,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    })
  }

  async grafTurnsPorEspecialidad(turnos: Turno[]): Promise<void> {
    const labels = (await this.userService.traerEspecialidadesValor()).map(a=>a['especialidad']) as string[];

    const data: number[] = labels.map(especialidad => {
      return turnos.filter(turno => turno.especialidad == especialidad).length;
    })

    this.turnosPorEsp = this.crearTupla(labels, data);

    const datos = {
      labels: labels,
      datasets: [{
        label: 'Cantidad de turnos: ',
        data: data,
        backgroundColor: ['#3F4B59', '#5E92BF', '#0D0D0D', '#D9C5B4', '#9CC1D9'],
        hoverOffset: 4,
        rotation: 4,
      }]
    };
    const chart: Chart = new Chart("cantTurnos", {
      type: 'polarArea' as ChartType,
      data: datos,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
      }
    })
  }

  crearTupla(keys: string[], values: number[]){
    const tupla: Tupla[] = [];
  
    for (let i = 0; i < keys.length; i++) 
    {
      const obj: Tupla = {};
      obj[keys[i]] = values[i];
      tupla.push(obj);
    }  
    
    return tupla;
  }
  
  parseFecha(fechaStr: string): string {
    const [dia, mes] = fechaStr.split('/').map(Number);
    return new Date(2024, mes - 1, dia).toLocaleDateString();
  }
}

type Tupla = { [key: string]: number };
