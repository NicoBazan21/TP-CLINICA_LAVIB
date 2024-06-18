import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { logGuard } from './guards/log.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'clinica',
    canActivate: [logGuard],
    loadChildren: () => import('./clinica/clinica.module').then(m => m.ClinicaModule,)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
