import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TurnosService } from 'src/app/services/turnos.service';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Turno } from 'src/app/models/turnos';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cancelar-turno',
  templateUrl: './cancelar-turno.component.html',
  styleUrls: ['./cancelar-turno.component.css']
})
export class CancelarTurnoComponent implements OnInit{

  form!: FormGroup;

  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CancelarTurnoComponent>);

  constructor(private userService: UserService,private turnosService: TurnosService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        comentario: new FormControl('',[Validators.required,Validators.minLength(6)])
      });
  }

  cancelarTurno()
  {
    if(this.form.valid)
    {
      let comentario = this.userService.sesionFirestore.rol + ": " + this.comentario?.value;
        
      this.turnosService.cancelarTurno(this.data.misTurnos.find(a=>a.id == this.data.id)!, comentario)
        .then(()=> {
          this.dialogRef.close('');
          this.toastr.success('Su turno ha sido cancelado...', `Listo!`, { tapToDismiss: true, progressBar: true, progressAnimation:'increasing', payload:true, positionClass: 'toast-top-right' });
          }
        );
    }
  }

  get comentario()
  {
    return this.form.get('comentario');
  }
}
export interface DialogData {
  misTurnos: Turno[];
  id: string;
  campo:string;
}
