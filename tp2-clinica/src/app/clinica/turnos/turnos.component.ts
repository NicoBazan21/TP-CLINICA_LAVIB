import { Component } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})

export class TurnosComponent
{
  pasoUno: boolean = false;
  pasoDos: boolean = false;
  especialidad: string = '';
  especialista: string = '';
  
  atraparCheck($event:any)
  {
    this.pasoUno = $event.valor;
    this.especialidad = $event.descripcion;
  }

  atraparCheckDos($event: any)
  {
    this.pasoDos = $event.valor;
    this.especialista = $event.descripcion;
  }

  volver()
  {
    this.pasoUno = false;
    this.pasoDos = false;
    this.especialidad = '';
    this.especialista = '';
  }
}
