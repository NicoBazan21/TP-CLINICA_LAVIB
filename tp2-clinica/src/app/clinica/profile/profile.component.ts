import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Admin } from 'src/app/models/admin';
import { Especialista } from 'src/app/models/especialista';
import { Paciente } from 'src/app/models/paciente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  img: any;
  usuario?: Especialista | Paciente | Admin;
  especialista?: Especialista;
  especialidades?: any;

  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.userService.traerImagenes(this.userService.sesionFirestore.mail)
    .then((imagenes)=>
    {
      this.img = imagenes;
    });
    this.usuario = this.userService.sesionFirestore;
    
    if (this.usuario instanceof Especialista) 
      this.especialista = this.usuario;
  
    this.userService.traerEspecialidades().subscribe((a)=>
      {
       this.especialidades = a;
      });
      console.log(this.usuario);
  }

}
