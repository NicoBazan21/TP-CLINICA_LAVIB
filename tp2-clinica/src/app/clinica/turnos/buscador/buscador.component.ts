import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { BuscadorObject } from '../especialidad/especialidad.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {

  @Input() listaGenerica!: Promise<BuscadorObject[]>;
  @Output() onEnviarCheck = new EventEmitter<any>();
  @Input() mostrarNombre?: boolean;

  myControl = new FormControl('');
  opciones!: BuscadorObject[];
  filteredOptions!: Observable<string[]>;
  valor!: string;
  comenzar: boolean = false;
  ngOnInit()
  {
    this.listaGenerica.then((data)=>
    {
      this.opciones = data;
      this.comenzar = true;
    });
  }

  ngOnChanges()
  {
    this.comenzar = false;
    this.listaGenerica.then((data)=>
      {
        this.opciones = data;
        this.comenzar = true;
      });
  }

  validar(campo: string)
  {
    console.log(campo);
    this.onEnviarCheck.emit({valor: true, descripcion: campo});
  }

  asignarDefault(event: Event)
  {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = `../../../../assets/especialidades/Default.png`;
  }
}
