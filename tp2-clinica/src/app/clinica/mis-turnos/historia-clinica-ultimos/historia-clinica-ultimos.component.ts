import { Component, Input, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta';
import { Especialista } from 'src/app/models/especialista';
import { Turno } from 'src/app/models/turnos';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-historia-clinica-ultimos',
  templateUrl: './historia-clinica-ultimos.component.html',
  styleUrls: ['./historia-clinica-ultimos.component.css']
})
export class HistoriaClinicaUltimosComponent implements OnInit{
  @Input() misTurnos?: Turno[];

  turnoEncuesta?: TurnoEncuesta[] = [];
  turnoDetalle?: TurnoEncuesta;
  especialista?: Especialista;
  selectedEspecialidad?: string = '';

  constructor(private userService: UserService, private encuestaService: EncuestaService){}

  ngOnInit() {
    if(this.misTurnos != null && this.misTurnos.length > 0)
    {
      if (this.userService.sesionFirestore instanceof Especialista) 
      {
        this.especialista = this.userService.sesionFirestore;
      }
      
      this.misTurnos!.sort((a, b) => {
        const fechaA = this.parseFechaCompleta(a.fecha);
        const fechaB = this.parseFechaCompleta(b.fecha);
        return fechaB.getTime() - fechaA.getTime();
      });
      let contador = 0;
      this.misTurnos.forEach((turno)=>{
        this.userService.buscarUsuarioPorId(turno.idPaciente).then((user)=>
        {
          this.encuestaService.traerEncuesta(turno.id).then((encuesta)=>
          {
            this.userService.traerImagenes(user.mail).then((a)=>
            {
              if(contador < 3)
                {
                  contador++;
                  this.turnoEncuesta!.push({turno: turno, url_foto: a[0],encuesta: encuesta[0]});
                  console.log(this.turnoEncuesta);
                }
            });
          })
        })
      });
    }
  }
  parseFechaCompleta(fechaStr: string): Date {
    const [dia, mes, anio] = fechaStr.split('/').map(Number);
    return new Date(anio, mes - 1, dia);
  }


  cargarDetalle = false;
  irHistoriaClinica(turno: TurnoEncuesta)
  {
    this.turnoDetalle = turno;
    this.cargarDetalle = true;
  }

  atraparVolver(volver: boolean)
  {
    this.cargarDetalle = volver;
  }

  filtrarPorEspecialidad()
  {
    let contador = 0;

    if(this.selectedEspecialidad != '')
    {
      this.turnoEncuesta = [];
      this.misTurnos!.forEach((turno)=>{        
        if(turno.especialidad == this.selectedEspecialidad)
        {
          this.userService.buscarUsuarioPorId(turno.idPaciente).then((user)=>
          {
            this.encuestaService.traerEncuesta(turno.id).then((encuesta)=>
            {
              this.userService.traerImagenes(user.mail).then((a)=>
              {
                if(contador < 3)
                {
                  contador++;
                  this.turnoEncuesta!.push({turno: turno, url_foto: a[0],encuesta: encuesta[0]});
                  console.log(this.turnoEncuesta);
                }
              });
            })
          })
        }
      });
    }
    else
    {
      this.turnoEncuesta = [];
      this.misTurnos!.forEach((turno)=>{
          this.userService.buscarUsuarioPorId(turno.idPaciente).then((user)=>
          {
            this.encuestaService.traerEncuesta(turno.id).then((encuesta)=>
            {
              this.userService.traerImagenes(user.mail).then((a)=>
              {
                if(contador < 3)
                  {
                    contador++;
                    this.turnoEncuesta!.push({turno: turno, url_foto: a[0],encuesta: encuesta[0]});
                    console.log(this.turnoEncuesta);
                  }
              });
            })
          })
      });  
    }
  }
}
export interface TurnoEncuesta
{
  turno: Turno,
  url_foto: string,
  encuesta: Encuesta
}