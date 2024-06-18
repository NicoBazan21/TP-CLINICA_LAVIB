import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialista } from 'src/app/models/especialista';
import { UserService } from 'src/app/services/user.service';
import { confirmarClave } from 'src/app/validacion/validaciones';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent
{
  form!: FormGroup;
  siteKey: string;
  resultado = new Array<any>();
  primerImagen!: any;
  especialidades!: any[];

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
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.minLength(2), Validators.required]),
      apellido: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.minLength(2), Validators.required]),
      edad: new FormControl('', [Validators.min(18), Validators.max(100), Validators.required]),
      dni: new FormControl('', [Validators.min(10000000),Validators.max(99999999), Validators.required]),
      especialidad: new FormControl("", [Validators.required]),
      agregarEsp: new FormControl("",[Validators.pattern('^[a-zA-Z ]+$'), Validators.minLength(4)]),
      clave: new FormControl("", [Validators.minLength(6), Validators.required]),
      repiteClave: new FormControl("", ),
      email: new FormControl("",[Validators.email, Validators.required]),
      recaptcha: new FormControl('', Validators.required),
      imagenUno: new FormControl('', Validators.required),
     }, [confirmarClave()]);
     this.userService.traerEspecialidades().subscribe((a)=>
     {
      this.especialidades = a;
     });
  }

  guardar()
  {  
    if(this.form.valid)
    {
      const especialista = new Especialista('',
      this.nombre!.value,
      this.apellido!.value,
      this.email!.value,
      [this.especialidad!.value],
      this.edad!.value,
      this.dni!.value,
      this.clave!.value,
      false,
      ' ',
      "Especialista",
      8,18,
      ["Lunes","Martes","Miercoles","Jueves","Viernes"]
    );
      this.userService.register(especialista.mail, especialista.clave)
      .then(()=>
      {
        this.toastr.info('Verifica tu email para poder continuar!.', `Ya casi estamos!.`,
        {
          tapToDismiss: true,
          progressBar: true,
          progressAnimation:'increasing',
          payload:true,
          positionClass: 'toast-top-right'
        });
        this.userService.subirImagen(this.primerImagen, 1, this.email?.value);
        this.userService.guardarEspecialista(especialista);
        this.userService.enviarEmailVerificacion();
        this.router.navigateByUrl('login');
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

  agregarEspecialidad()
  {
    this.userService.guardarEspecialidad(this.agregarEsp?.value);
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
  get especialidad()
  {
    return this.form.get('especialidad');
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
  get agregarEsp()
  {
    return this.form.get('agregarEsp');
  }
}
