import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'especialista', component: EspecialistaComponent},
  { path: 'paciente', component: PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
