import { Component } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Especialista } from 'src/app/models/especialista';
import { UserService } from 'src/app/services/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent
{
  bandera = false;
  listaEspecialistas: any[] = [];

  constructor(private userServie: UserService, private router: Router){}

  ngOnInit()
  {
    // this.userServie.traerEspecialistas().subscribe((a)=>
    // {
    //   this.listaEspecialistas = a;
    // })
    this.userServie.traerUsuarios().subscribe((a)=>
      {
        this.listaEspecialistas = a;
      })
  }

  atraparEsp($event: any)
  {
    this.userServie.modificar($event);
  }

  cambiar()
  {
    this.bandera = !this.bandera;
  }

  verHistoriaClinica()
  {
    this.router.navigateByUrl("/clinica/misTurnos/turnos/admin");
  }

  fileName = "PlanillaUsuarios.xlsx";
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
      pdf.text(`Datos de usuarios rol: Admin.`, 50, 20); // Posición (50, 20)
      let date = new Date();
      pdf.setFontSize(14);
      pdf.setTextColor(60, 60, 60);
      pdf.text('Fecha al: ' + date.toLocaleDateString(), 50, 30);
      
      const positionY = 50;
      pdf.addImage(contentDataUrl, 'PNG', 0, positionY, 210, 100);
      
      pdf.save('planillaUsuarios.pdf');
    });
  }
  
}
