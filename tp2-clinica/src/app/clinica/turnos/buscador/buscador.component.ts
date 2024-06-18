import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {

  @Input() listaGenerica!: Promise<string[]>;
  @Output() onEnviarCheck = new EventEmitter<any>();

  myControl = new FormControl('');
  opciones!: string[];
  filteredOptions!: Observable<string[]>;
  valor!: string;

  ngOnInit()
  {
    this.listaGenerica.then((data)=>
    {
      this.opciones = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );      
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.opciones.filter(option => option.toLowerCase().includes(filterValue));
  }

  validar($event: any)
  {
    this.onEnviarCheck.emit({valor: true, descripcion: $event.target.innerText});
  }
}
