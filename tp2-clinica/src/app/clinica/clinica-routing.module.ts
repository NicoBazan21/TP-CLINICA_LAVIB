import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { adminGuard } from '../guards/admin.guard';
import { logGuard } from '../guards/log.guard';
import { MisHorariosComponent } from './mis-horarios/mis-horarios.component';

const routes: Routes = [
  { path: '', component: ClinicaComponent,canActivate:[logGuard],
    children:[
      {path: '', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'modificar', component: MisHorariosComponent},
      {path: 'administrarUsuarios',
        canActivate: [adminGuard],
        loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule) 
      },
      { path: 'turnos',
        loadChildren: () => import('./turnos/turnos.module').then(m => m.TurnosModule) 
      },
      { path: 'misTurnos',
        loadChildren: () => import('./mis-turnos/mis-turnos.module').then(m => m.MisTurnosModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicaRoutingModule { }
