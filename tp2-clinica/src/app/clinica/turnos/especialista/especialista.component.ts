import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BuscadorObject } from '../especialidad/especialidad.component';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent implements OnChanges, OnDestroy{
  @Output() onEnviarCheck = new EventEmitter<any>();
  @Input() especialidad!: string;
  @Input() pasoUno: boolean | undefined;

  listaEspecialistas!: Promise<BuscadorObject[]>;

  constructor(private userService: UserService){}

  ngOnChanges()
  {
    if(this.pasoUno)
    {
      console.log(this.especialidad);
      this.listaEspecialistas = new Promise(resolve =>
        this.userService.traerEspecialistasPorEspecialidad(this.especialidad)
        .then((data) => {
          let retorno: BuscadorObject[] = [];
            data.map(async (item) => {
            retorno.push(await this.userService.traerImagenes(item['mail']).then((a: string[]) => {
              return { campo: `${item['nombre']}`, urlFoto: a[0] };
            }));
          })
            resolve(retorno);
        }))
    }
  }

  ngOnDestroy(): void {
  }

  atraparCheck($event:any)
  {
    this.onEnviarCheck.emit($event);
  }
}
