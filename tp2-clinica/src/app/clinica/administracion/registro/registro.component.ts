import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { UserService } from 'src/app/services/user.service';
import { confirmarClave } from 'src/app/validacion/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent
{
  form!: FormGroup;
  siteKey: string;
  primerImagen!: any;

  constructor(private toastr: ToastrService,
    private userService: UserService,    ) {
    this.siteKey = '6LcDWA8pAAAAAPL2dHPCRP3V_k7gGfRTFfOR5NDv';
  }

  ngOnInit(): void
  {
    this.form = new FormGroup(
    {
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.minLength(2), Validators.required]),
      apellido: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.minLength(2), Validators.required]),
      edad: new FormControl('', [Validators.min(18), Validators.max(100), Validators.required]),
      dni: new FormControl('', [Validators.minLength(8), Validators.required]),
      clave: new FormControl("", [Validators.minLength(6), Validators.required]),
      repiteClave: new FormControl("", ),
      email: new FormControl("",[Validators.email, Validators.required]),
      recaptcha: new FormControl('', Validators.required),
      imagenUno: new FormControl('', Validators.required),
     }, [confirmarClave()]);
  }

  guardar()
  {
    if(this.form.valid)
    {
      const admin = new Admin('',
      this.nombre?.value,
      this.apellido?.value,
      this.email?.value,
      this.edad?.value,
      this.dni?.value,
      this.clave?.value,
      ' ','admin');

      this.userService.register(admin.mail, admin.clave)
      .then(()=>
      {
        this.toastr.info('El usuario deberá confirmar su mail!.', `Ya casi estamos!.`,
        {
          tapToDismiss: true,
          progressBar: true,
          progressAnimation:'increasing',
          payload:true,
          positionClass: 'toast-top-right'
        });
        this.userService.subirImagen(this.primerImagen, 1, this.email?.value);
        this.userService.guardarAdmin(admin);
        this.userService.enviarEmailVerificacion();
      })
      .catch(()=>
      {
        this.toastr.error('Este usuario ya existe!.', `Error!.`,
        {
          tapToDismiss: true,
          progressBar: true,
          progressAnimation:'increasing',
          payload:true,
          positionClass: 'toast-top-right'
        });
      })
    }
    else
    {
      this.toastr.warning('Completa correctamente los campos', `Atencion!.`,
      {
        tapToDismiss: true,
        progressBar: true,
        progressAnimation:'increasing',
        payload:true,
        positionClass: 'toast-top-right'
      });
    }
  }

  cargoImagen($event: any, imagen: number)
  {
    switch(imagen)
    {
      case 1:
        this.primerImagen = $event.target.files[0];
        break;
    }
  }
  get nombre()
  {
    return this.form.get('nombre');
  }
  get apellido()
  {
    return this.form.get('apellido');
  }
  get edad()
  {
    return this.form.get('edad');
  }
  get dni()
  {
    return this.form.get('dni');
  }
  get clave()
  {
    return this.form.get('clave');
  }
  get repiteClave()
  {
    return this.form.get('repiteClave');
  }
  get email()
  {
    return this.form.get('email');
  }
  get recaptcha()
  {
    return this.form.get('recaptcha');
  }
  get imagenUno()
  {
    return this.form.get('imagenUno');
  }
}
