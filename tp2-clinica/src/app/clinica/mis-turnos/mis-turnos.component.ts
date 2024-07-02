import { Component, Input, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { map } from 'rxjs';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent {

  historiaClinica: string = '';
  selectedEspecialidad: string = '';
  constructor(private route: ActivatedRoute,private userService: UserService, private turnosService: TurnosService){}
  
  misTurnos: Turno[] = [];
  rolActual: string = '';
  renderizar = false;
  filtro: string = '';
  listaEspecialidades: string[];

  //PIPES DE FORMATEO DE FECHA
  ngOnInit() {
    this.route.params.subscribe(params =>
    {
      this.historiaClinica = params['historiaClinica'];
    })
    if(this.userService.sesionFirestore.rol == 'Paciente')
      this.turnosService.traerTurnosPorPaciente(this.userService.sesionFirestore.id)
      .pipe(map(turnos => turnos.map(turno => {
        return {
          ...turno,
          fecha: this.parseFecha(turno.fecha)
        };
      }))
    ).subscribe((a)=>
      {
        this.misTurnos = a as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
        this.listaEspecialidades = [...new Set(this.misTurnos.map(turno => turno.especialidad))];
      });
    else if(this.userService.sesionFirestore.rol == 'Especialista')
    this.turnosService.traerTurnosPorEspecialista(this.userService.sesionFirestore.id)
    .pipe(map(turnos => turnos.map(turno => {
        return {
          ...turno,
          fecha: this.parseFecha(turno.fecha)
        };
      }))
    ).subscribe((turnos)=>
      {
        this.misTurnos = turnos as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
        this.listaEspecialidades = [...new Set(this.misTurnos.map(turno => turno.especialidad))];
      });
    else
    this.turnosService.traerTurnos()
    .pipe(map(turnos => turnos.map(turno => {
      return {
        ...turno,
        fecha: this.parseFecha(turno['fecha'])
      };
    }))).subscribe((a)=>
      {
        this.misTurnos = a as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
        this.listaEspecialidades = [...new Set(this.misTurnos.map(turno => turno.especialidad))];
      });    
  }

  parseFecha(fechaStr: string): string {
    const [dia, mes] = fechaStr.split('/').map(Number);
    return new Date(2024, mes - 1, dia).toLocaleDateString();
  }

  parseFechaCompleta(fechaStr: string): Date {
    const [dia, mes, anio] = fechaStr.split('/').map(Number);
    return new Date(anio, mes - 1, dia);
  }

  fileName = "Ejemplo.xlsx";
  exportarExcel()
  {
    var data = document.getElementById('descargar')!;

    const ws = XLSX.utils.table_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    
    XLSX.writeFile(wb,this.fileName);
  }

  exportarPdf() {
    const data = document.getElementById('descargar')!;
    
    const iconUrl = '../../../assets/img/hospital.png';
  
    html2canvas(data).then(canvas => {
      const contentDataUrl = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      pdf.addImage(iconUrl, 'PNG', 10, 10, 30, 30);
      
      pdf.setFontSize(18);
      pdf.setTextColor(40, 40, 40);
      pdf.text(`Historia clinica del paciente: ${this.userService.sesionFirestore.nombre} ${this.userService.sesionFirestore.apellido}.`, 50, 20); // Posición (50, 20)
      let date = new Date();
      pdf.setFontSize(14);
      pdf.setTextColor(60, 60, 60);
      pdf.text('Fecha al: ' + date.toLocaleDateString(), 50, 30);
      
      const positionY = 50;
      pdf.addImage(contentDataUrl, 'PNG', 0, positionY, 210, 100);
      
      pdf.save('pdfPrueba.pdf');
    });
  }

  limpiarFiltro()
  {
    $('table tr').each((i, tr) => {
      let dataFiltro = $(tr);

      if(dataFiltro && dataFiltro.hasClass("ocultarRow"))
      {
        dataFiltro.removeClass("ocultarRow");
      }
    });
    this.filtro = '';
  }

  filtrar()
  {
    if(this.filtro.length > 0) 
      $('table tr').each((i, tr) => {
        
        let dataFiltro = $(tr).data('filtro');

        if(dataFiltro)
          if(((dataFiltro).toUpperCase().includes(this.filtro.toUpperCase()))) 
            $(tr).removeClass("ocultarRow");
          else
            $(tr).addClass("ocultarRow");
      });
    else
      this.limpiarFiltro();
  }

  filtrarPorEspecialidad()
  {
    $('table tr').each((i, tr) => {
        
      let dataFiltro = $(tr).data('filtro');

      if(dataFiltro)
        if(((dataFiltro).toUpperCase().includes(this.selectedEspecialidad.toUpperCase()))) 
          $(tr).removeClass("ocultarRow");
        else
          $(tr).addClass("ocultarRow");
    });
  }
}
