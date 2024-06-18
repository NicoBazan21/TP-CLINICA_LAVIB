import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { Especialista } from 'src/app/models/especialista';
import { Paciente } from 'src/app/models/paciente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  form!: FormGroup;
  siteKey: string;

  constructor(private toastr: ToastrService,
    private userService: UserService,
    private router: Router
    ) {
    this.siteKey = '6LcDWA8pAAAAAPL2dHPCRP3V_k7gGfRTFfOR5NDv';
  }

  ngOnInit(): void
  {
    this.form = new FormGroup(
    {
      clave: new FormControl("", [Validators.minLength(6), Validators.required]),
      email: new FormControl("",[Validators.email, Validators.required]),
      // recaptcha: new FormControl('', Validators.required),
     },);
  }

  loguear()
  {
    if(this.form.valid)
    {
      this.toastr.info('', `Iniciando sesion...`,
        {
          tapToDismiss: true,
          progressBar: true,
          progressAnimation:'increasing',
          payload:true,
          positionClass: 'toast-top-right'
      });
      this.userService.login(this.email?.value,this.clave?.value)
      .then((user)=>
      {
        if(user.user.emailVerified == false)
        {
          this.toastr.info('Debes verificar primero el email.', `Atencion!.`,
          {
            tapToDismiss: true,
            progressBar: true,
            progressAnimation:'increasing',
            payload:true,
            positionClass: 'toast-top-right'
          });
          this.userService.logout();
        }
        else
        {
          this.userService.buscarUsuario(this.email?.value)
          .then((user)=>
          {
            switch(user['rol'])
            {
              case 'Paciente':
                this.userService.sesionFirestore = new Paciente(user['id'], user['nombre'], user['apellido'], user['mail'], user['obraSocial'], user['edad'], user['dni'], user['clave'], user['rol'], '','');
                this.router.navigateByUrl('clinica');
                break;
              case 'Especialista':
              if(user.habilitado)
              {
                this.userService.sesionFirestore = new Especialista(user['id'], user['nombre'], user['apellido'], user['mail'],user['especialidades'], user['edad'], user['dni'], user['clave'], user['habilitado'], ' ', user['rol'],user['inicio'],user['fin'],user['diasLaborables']);
                this.router.navigateByUrl('clinica');
              }
              else
              {
                this.toastr.info('Debes esperar a que un administrador active tu cuenta', `Atencion!.`,
                {
                  tapToDismiss: true,
                  progressBar: true,
                  progressAnimation:'increasing',
                  payload:true,
                  positionClass: 'toast-top-right'
                });
                this.userService.logout();
              }
              break;
              case 'admin':
                this.userService.sesionFirestore = new Admin(user['id'], user['nombre'], user['apellido'], user['mail'], user['edad'], user['dni'], user['clave'], ' ', user['rol']);
                this.router.navigateByUrl('clinica');
              break;
            }
          });
        }
      });
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

  admin()
  {
    this.email?.patchValue('antoniobazan2112@gmail.com');
    this.clave?.patchValue('nico1234');
  }

  espUno()
  {
    this.email?.patchValue('nicolasdarkar@gmail.com');
    this.clave?.patchValue('nico1234');
  }

  espDos()
  {
    this.email?.patchValue('nicolasdarkar2@gmail.com');
    this.clave?.patchValue('nico1234');
  }

  pacUno()
  {
    this.email?.patchValue('mariadelia731@gmail.com');
    this.clave?.patchValue('nico1234');
  }

  get clave()
  {
    return this.form.get('clave');
  }
  get email()
  {
    return this.form.get('email');
  }
  get recaptcha()
  {
    return this.form.get('recaptcha');
  }
}
