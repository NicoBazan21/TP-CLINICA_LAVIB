import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

}
