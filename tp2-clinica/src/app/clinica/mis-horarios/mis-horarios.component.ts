import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Especialista } from 'src/app/models/especialista';
import { Paciente } from 'src/app/models/paciente';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mis-horarios',
  templateUrl: './mis-horarios.component.html',
  styleUrls: ['./mis-horarios.component.css'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('1500ms ease-out', keyframes([
          style({ transform: 'translateY(0)', opacity: 1, offset: 0.8 }),
          style({ transform: 'translateY(40px)', offset: 0.9 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class MisHorariosComponent implements OnInit, AfterViewInit{
  img: any;
  usuario?: Especialista | Admin | Paciente;
  especialista?: Especialista;
  especialidades?: any[];

  especialidadElegida?: string;

  checkbox: boolean = false;
  constructor(private userService: UserService,private toastr: ToastrService, private router: Router){}

  ngOnInit()
  {
    this.userService.traerImagenes(this.userService.sesionFirestore?.mail)
    .then((imagenes)=>
    {
      this.img = imagenes;
    });
    this.usuario = this.userService.sesionFirestore;
    
    if (this.usuario instanceof Especialista) 
      this.especialista = this.usuario;
  
    this.userService.traerEspecialidades().subscribe((a)=>
    {
      this.especialidades = a.filter((a:any)=>
      {
        return !this.especialista?.especialidades.includes(a.especialidad);
      });
    });
  
    this.iniciarHorarios(this.especialista!.inicio,this.horarios,8,17);
    this.iniciarHorarios(this.especialista!.fin, this.horariosFin,this.especialista!.inicio,18);
  }

  ngAfterViewInit()
  {
    this.marcarDiasLaborables(this.especialista?.diasLaborables);
  }
  
  habilitarDia($event:any)
  {
    // const elemento = $event.target;
    // $(elemento).toggleClass("gris");
  }

  horarios: any[] = [];
  horariosFin: any[] = [];

  iniciarHorarios(numero:number, obj:any[], inicio:number,limite:number)
  {
    for(let i = inicio; i <= limite; i++)
    {
      if(i != numero)
        obj.push({id:i, hora:i+":00",selected:false});
      else
        obj.push({id:i, hora:i+":00",selected:true});
    }
  }

  generarHorarioFin($event:any)
  {
    let valor = ($event.target as HTMLSelectElement)?.value;
    const valorNumero = parseInt(valor);
    this.generarFin(valorNumero + 1);
  }

  generarFin(valorNumero:number)
  {
    let auxHorarios = [];
    for(let i = valorNumero; i <= 18; i++)
    {
      auxHorarios.push({id:i, hora:i+":00"});
    }
    this.horariosFin = auxHorarios;
  }

  marcarDiasLaborables(diasLaborables: string[] | undefined)
  {
    $('#botonesLaborables').find('button').each((index, button)=>
    {
      if(diasLaborables?.includes($(button).text()))
        $(button).addClass('gris');
    });
  }

  guardar()
  {
    this.toastr.info('Espere un momento...', `Guardando datos`,
      {
        tapToDismiss: true,
        progressBar: true,
        progressAnimation:'increasing',
        payload:true,
        positionClass: 'toast-top-right'
      });
    if(this.especialista != null)
    {
      let esp = $('#EspecialidadElegida').val() as string;
      let dias: string[] = [];
      $('button.gris').each((i, boton) => 
      {
        dias.push($(boton).text());
      });
      let horarioInicio = $('#HorarioInicio').val() as number;
      let horarioFin = $('#HorarioFin').val() as number;
      
      this.especialista.inicio = horarioInicio;
      this.especialista.fin = horarioFin;
      if(this.checkbox)
        this.especialista.especialidades.push(esp);

      this.especialista.diasLaborables = dias;
      
      this.userService.modificar(this.especialista).then(()=>
      {
        this.toastr.success('Cambios guardados!', ``,
          {
            tapToDismiss: true,
            progressBar: true,
            progressAnimation:'increasing',
            payload:true,
            positionClass: 'toast-top-right'
          });
        this.router.navigateByUrl('/clinica/profile');
      });
    }    
  }
}
