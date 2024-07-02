import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TurnosService } from 'src/app/services/turnos.service';
import { DialogData } from '../cancelar-turno/cancelar-turno.component';

@Component({
  selector: 'app-calificar-atencion',
  templateUrl: './calificar-atencion.component.html',
  styleUrls: ['./calificar-atencion.component.css']
})
export class CalificarAtencionComponent {
  form!: FormGroup;

  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CalificarAtencionComponent>);

  constructor(private userService: UserService,private turnosService: TurnosService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        comentario: new FormControl('',[Validators.required,Validators.minLength(6)])
      });
  }

  calificarAtencion()
  {
    if(this.form.valid)
    {
      if(this.data.campo != 'encuesta')
        this.turnosService.calificarAtencion(this.data.misTurnos.find(a=>a.id == this.data.id)!, this.comentario?.value)
        .then((a)=>
        {
          this.dialogRef.close('');
          this.toastr.success('Su comentario ha sido cargado con exito', `Listo!`, { tapToDismiss: true, progressBar: true, progressAnimation:'increasing', payload:true, positionClass: 'toast-top-right' });
        });
      else
      this.turnosService.calificarEncuesta(this.data.misTurnos.find(a=>a.id == this.data.id)!, this.comentario?.value)
      .then((a)=>
      {
        this.dialogRef.close('');
        this.toastr.success('Su encuesta ha sido cargado con exito', `Listo!`, { tapToDismiss: true, progressBar: true, progressAnimation:'increasing', payload:true, positionClass: 'toast-top-right' });
      });
    }
  }

  get comentario()
  {
    return this.form.get('comentario');
  }
}