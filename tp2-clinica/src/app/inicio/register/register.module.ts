import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ToastContainerDirective } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    RegisterComponent,
    EspecialistaComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ToastContainerDirective,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class RegisterModule { }
