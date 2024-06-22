import { Component, Input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialista } from 'src/app/models/especialista';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent
{
  dias: Date[] = [];
  turnos!: any[];
  listaTurnos: Turno[] = [];

  @Input() especialidad?: string;
  @Input() especialista?: string;

  especialistaTarget!: Especialista;

  restablecer()
  {
   this.dias = [];
   this.turnos = [];
   this.listaTurnos = [];
  }

  constructor(private turnosService: TurnosService, private userService: UserService,
    private toastr: ToastrService, private router: Router
  ){}

  ngOnChanges()
  {
    this.restablecer();
    this.userService.traerEspecialistaPorNombreEspecialidad(this.especialista!,this.especialidad!).then((a)=>
      {
        this.especialistaTarget = a[0] as Especialista;
        this.inicializarDias();
        this.crearTurnos();

        this.turnosService.traerTurnosPorEspecialista(this.especialistaTarget.id).subscribe((data)=>
        {
          this.turnos = data;
        });
      });
  }

  crearTurnos()
  {
    const diasMap: Record<number,string> = {
      1:"Lunes",
      2:"Martes",
      3:"Miercoles",
      4:"Jueves",
      5:"Viernes"
    };
    const todasLasHoras: string[] = [];
    let inicio: number = parseInt(this.especialistaTarget.inicio + '');
    let fin: number = parseInt(this.especialistaTarget.fin + '');

    for(let i = inicio; i <= fin; i++)
      todasLasHoras.push(i+':00');

    this.dias.map((dia) =>
    {
      this.listaTurnos.push(
      new Turno('',
        `${dia.getDate().toString()}/${(dia.getMonth()+1).toString()}`,
        todasLasHoras.map((hora)=>hora),
        diasMap[dia.getDay()],'','','','','','','',''
      ));
    })
  }

  esTurnoOcupado(fecha: string, hora: string): boolean
  {
    return this.turnos?.some(turno => turno.fecha == fecha && turno.hora === hora && 
      (turno.estadoTurno == 'Pendiente' || turno.estadoTurno == 'Aceptado'));
  }

  esTurnoOcupadoClass(fecha: string, hora: string) : string
  {
    if(this.esTurnoOcupado(fecha, hora))
      return 'btn-danger';
    return 'btn-outline-light btn-primary';
  }

  inicializarDias()
  {
    const diasMap: Record<string,number> = {
      "Lunes": 1,
      "Martes": 2,
      "Miercoles": 3,
      "Jueves": 4,
      "Viernes": 5
    };
    const diasLaborables = this.especialistaTarget.diasLaborables.map(a => diasMap[a]);
    
    const fechaActual = new Date();
    
    let i = 0;
    while(this.dias.length < 15)
    {
      const nuevaFecha = new Date();
      nuevaFecha.setDate(fechaActual.getDate() + i);
      
      if(diasLaborables.includes(nuevaFecha.getDay()))
      {
        this.dias.push(nuevaFecha);
      }
      i++;
    }
  }

  guardarTurno(fecha: any, hora: any)
  {
    let turno: Turno = new Turno('',fecha,[hora],'',this.especialistaTarget.id,this.userService.sesionFirestore.id,
      this.especialistaTarget.apellido + ", "+this.especialistaTarget.nombre + ".",this.userService.sesionFirestore.apellido + ", "+this.userService.sesionFirestore.nombre + ".",
      'Pendiente','','',this.especialidad!
    );
    Swal.fire({
      title: "Esta seguro de asignar el turno?.",
      html:`<h4>Detalles del turno.<h4/><br/><h5>Fecha:  ${fecha} Hora:  ${hora}hs.<br/>Especialidad:  ${this.especialidad}.<br/>
      Especialista:  ${this.especialistaTarget.apellido}, ${this.especialistaTarget.nombre}.<h5/>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar.",
      cancelButtonText:"Cancelar.",
    }).then((a) => {
      if(a.isConfirmed)
        this.turnosService.guardarTurno(turno).then(()=> {
          this.toastr.success('Su turno ha sido reservado...', `Exito!`,
          {
            tapToDismiss: true,
            progressBar: true,
            progressAnimation:'increasing',
            payload:true,
            positionClass: 'toast-top-right'
          });
        });
    });
  }

  mostrar($event: Event) {
    const targetDiv = $event.currentTarget as HTMLElement;
    $(targetDiv).find('button').each((i,boton)=>
    {
        $(boton).toggleClass('btn-outline-dark');
        $(boton).toggleClass('btn-dark');
    })
    const parent = targetDiv.parentNode as HTMLElement;
  
    Array.from(parent.children).forEach((child: Element) => {
      if (child !== targetDiv) {
        const botones = child.querySelectorAll('button');
        botones.forEach((button: Element) => {
          $(button as HTMLElement).toggle();
        });
      }
    });
  }

  formatHora(hora: string)
  {
    let test = hora.split(':');
    if(parseInt(test[0]) < 12)
      hora = hora + ' am';
    else
      hora = hora + ' pm';
    return hora;
  }
}
