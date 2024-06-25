import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Admin } from 'src/app/models/admin';
import { Especialista } from 'src/app/models/especialista';
import { Paciente } from 'src/app/models/paciente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  img: string[] = [];
  usuario?: Especialista | Paciente | Admin;
  especialista?: Especialista;
  especialidades?: any;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit()
  {
    this.userService.traerImagenes(this.userService.sesionFirestore.mail)
    .then((imagenes)=>
    {
      this.img = imagenes;
    });
    this.usuario = this.userService.sesionFirestore;
    
    if (this.usuario instanceof Especialista) 
      this.especialista = this.usuario;
  
    this.userService.traerEspecialidades().subscribe((a)=>
      {
       this.especialidades = a;
      });
      console.log(this.usuario);
  }

  irMisTurnos()
  {
    this.router.navigateByUrl("/clinica/misTurnos/turnos/true");
  }


  exportarPdf()
  {
    var data = document.getElementById('descargar')!;
    html2canvas(data).then(canvas => {
      var width = 309;
      var height = 295;
      var imgHeight = canvas.height * height / canvas.width;
      var heightLeft = height;

      const contentDataUrl = canvas.toDataURL('image/png');

      let pdf = new jsPDF('p','mm','a4');
      var position = 0;

      pdf.addImage(contentDataUrl, 'PNG',0,position, width, height);
      pdf.save('pdfPrueba.pdf');
    });
  }
}
