import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

const routes: Routes = [{ path: '', component: InicioComponent },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
