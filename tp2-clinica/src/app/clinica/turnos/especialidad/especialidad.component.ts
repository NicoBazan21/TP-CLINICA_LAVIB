import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})

export class EspecialidadComponent {

  @Output() onEnviarCheck = new EventEmitter<any>();

  listaEspecialidades!: Promise<BuscadorObject[]>;
  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.listaEspecialidades = new Promise((resolve)=>
    {
      this.userService.traerEspecialidades().subscribe((data)=>
      {
        const datos = data.map((especialidad)=>
        {        
          return {campo:especialidad['especialidad'] ,urlFoto:`../../../../assets/especialidades/${especialidad['especialidad']}.png`};
        });
        resolve(datos);
      })
    });
  }

  atraparCheck($event:any)
  {
    //console.log($event);
    this.onEnviarCheck.emit($event);
  }
}
export interface BuscadorObject {
  campo: string,
  urlFoto: string,
}