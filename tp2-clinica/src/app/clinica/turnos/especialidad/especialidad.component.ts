import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})

export class EspecialidadComponent {

  @Output() onEnviarCheck = new EventEmitter<any>();

  listaEspecialidades!: Promise<string[]>;
  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.listaEspecialidades = new Promise((resolve)=>
    {
      this.userService.traerEspecialidades().subscribe((data)=>
      {
          const datos = data.map((especialidad)=>
          {
            return especialidad['especialidad'];
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

  /*firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {}

  @Output() onEnviarCheck = new EventEmitter<any>();

  validar()
  {
    if(this.firstFormGroup.valid)
    {
      //console.log("valido");
      this.onEnviarCheck.emit(true);
    }
  }*/
}

/*@Output() onEnviarCheck = new EventEmitter<any>();

  listaEspecialidades!: Promise<string[]>;
  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.listaEspecialidades = new Promise((resolve)=>
    {
      this.userService.traerEspecialidades().subscribe((data)=>
      {
          const datos = data.map((especialidad)=>
          {
            return especialidad['especialidad'];
          });
          resolve(datos);
        })
    });
  }

  atraparCheck($event:any)
  {
    this.onEnviarCheck.emit($event);
  }*/
