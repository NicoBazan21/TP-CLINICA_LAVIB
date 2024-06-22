import { Component, Input, OnInit } from '@angular/core';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent {

  historiaClinica: string = '';
  
  constructor(private route: ActivatedRoute,private userService: UserService, private turnosService: TurnosService){}
  
  misTurnos: Turno[] = [];
  rolActual: string = '';
  renderizar = false;
  filtro: string = '';

  ngOnInit() {
    this.route.params.subscribe(params =>
    {
      this.historiaClinica = params['historiaClinica'];
      console.log(this.historiaClinica);
    })
    if(this.userService.sesionFirestore.rol == 'Paciente')
      this.turnosService.traerTurnosPorPaciente(this.userService.sesionFirestore.id).subscribe((a)=>
      {
        this.misTurnos = a as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
      });
    else if(this.userService.sesionFirestore.rol == 'Especialista')
    this.turnosService.traerTurnosPorEspecialista(this.userService.sesionFirestore.id).subscribe((a)=>
      {
        this.misTurnos = a as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
      });
    else
    this.turnosService.traerTurnos().subscribe((a)=>
      {
        this.misTurnos = a as Turno[];
        this.renderizar = true;
        this.rolActual = this.userService.sesionFirestore.rol;
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
}
