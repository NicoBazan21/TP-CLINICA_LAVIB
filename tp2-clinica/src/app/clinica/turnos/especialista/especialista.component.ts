import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent implements OnChanges, OnDestroy{
  @Output() onEnviarCheck = new EventEmitter<any>();
  @Input() especialidad!: string;
  @Input() pasoUno: boolean | undefined;

  listaEspecialistas!: Promise<string[]>;

  constructor(private userService: UserService){}

  ngOnChanges()
  {
    if(this.pasoUno)
    {
      console.log(this.especialidad);
      this.listaEspecialistas = new Promise(resolve =>
        this.userService.traerEspecialistasPorEspecialidad(this.especialidad)
        .then(data => resolve(data.map(item => item['nombre']))))
    }
  }

  ngOnDestroy(): void {
  }

  atraparCheck($event:any)
  {
    this.onEnviarCheck.emit($event);
  }
}
