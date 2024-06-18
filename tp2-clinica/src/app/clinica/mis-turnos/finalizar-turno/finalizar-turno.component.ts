import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Turno } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-finalizar-turno',
  templateUrl: './finalizar-turno.component.html',
  styleUrls: ['./finalizar-turno.component.css']
})
export class FinalizarTurnoComponent {
  form!: FormGroup;

  readonly data = inject<Turno>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FinalizarTurnoComponent>);

  constructor(private userService: UserService,private turnosService: TurnosService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        resenia: new FormControl('',[Validators.required,Validators.minLength(6)]),
      });
  }

  finalizarTurno()
  {
    if(this.form.valid)
    {   
      this.turnosService.finalizarTurno(this.data, this.resenia?.value)
        .then(()=> {
          this.toastr.success('Su turno ha sido finalizado...', `Listo!`, { tapToDismiss: true, progressBar: true, progressAnimation:'increasing', payload:true, positionClass: 'toast-top-right' });
            this.dialogRef.close('');
          }
        );
    }
  }

  get resenia()
  {
    return this.form.get('resenia');
  }
}
