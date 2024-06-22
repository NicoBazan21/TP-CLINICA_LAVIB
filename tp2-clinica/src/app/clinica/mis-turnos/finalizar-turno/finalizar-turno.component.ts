import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Encuesta } from 'src/app/models/encuesta';
import { Turno } from 'src/app/models/turnos';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-finalizar-turno',
  templateUrl: './finalizar-turno.component.html',
  styleUrls: ['./finalizar-turno.component.css']
})
export class FinalizarTurnoComponent {
  form!: FormGroup;

  readonly data = inject<Turno>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FinalizarTurnoComponent>);

  constructor(private turnoService: TurnosService,private encuestaService: EncuestaService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        resenia: new FormControl('',[Validators.required,Validators.minLength(6)]),
        altura: new FormControl('',[Validators.required ,Validators.min(0),Validators.max(350)]),
        peso: new FormControl('',[Validators.required,Validators.min(0),Validators.max(350)]),
        temperatura: new FormControl('',[Validators.required,Validators.min(27),Validators.max(43)]),
        presion: new FormControl('',[Validators.required,Validators.min(80),Validators.max(130)]),
        claveUno: new FormControl('',[Validators.required,Validators.minLength(3)]),
        valorUno: new FormControl('',[Validators.required,Validators.minLength(3)]),
        claveDos: new FormControl('',[Validators.required,Validators.minLength(3)]),
        valorDos: new FormControl('',[Validators.required,Validators.minLength(3)]),
      },Validators.required);
  }

  finalizarTurno()
  {
    if(this.form.valid)
    {   
      let encuesta = new Encuesta('', this.data.id, this.altura?.value, this.peso?.value, this.temperatura?.value, this.presion?.value, this.claveUno?.value, this.valorUno?.value, this.claveDos?.value, this.valorDos?.value,
        this.data.idPaciente, this.data.idEspecialista, this.data.nombreCompletoPaciente,this.data.nombreCompletoEspecialista)
        this.turnoService.finalizarTurno(this.data, this.resenia?.value);
        this.encuestaService.guardarEncuesta(encuesta).then(()=> {
          this.dialogRef.close('');
          this.toastr.success('Su encuesta ha sido cargada con éxito.', `Listo!`, { tapToDismiss: true, progressBar: true, progressAnimation:'increasing', payload:true, positionClass: 'toast-top-right' });

      });
    }
  }

  get resenia()
  {
    return this.form.get('resenia');
  }
  get altura()
  {
    return this.form.get('altura');
  }
  get peso()
  {
    return this.form.get('peso');
  }
  get temperatura()
  {
    return this.form.get('temperatura');
  }
  get presion()
  {
    return this.form.get('presion');
  }
  get claveUno()
  {
    return this.form.get('claveUno');
  }
  get valorUno()
  {
    return this.form.get('valorUno');
  }
  get claveDos()
  {
    return this.form.get('claveDos');
  }
  get valorDos()
  {
    return this.form.get('valorDos');
  }
}
