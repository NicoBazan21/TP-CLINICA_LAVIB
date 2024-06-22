import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/models/especialista';
import { UserService } from 'src/app/services/user.service';

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
    this.userServie.traerEspecialistas().subscribe((a)=>
    {
      this.listaEspecialistas = a;
    })
  }

  atraparEsp($event: Especialista)
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
}
