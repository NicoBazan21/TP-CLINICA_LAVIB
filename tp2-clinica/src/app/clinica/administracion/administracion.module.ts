import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TablaComponent } from './tabla/tabla.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { OrdenarAlfabeticoPipe } from 'src/app/pipes/ordenar-alfabetico.pipe';
import { FormatEdadPipe } from 'src/app/pipes/format-edad.pipe';
import { DatoImpotantePipe } from 'src/app/pipes/dato-impotante.pipe';


@NgModule({
  declarations: [
    AdministracionComponent,
    UsuariosComponent,
    TablaComponent,
    RegistroComponent,
    OrdenarAlfabeticoPipe,
    FormatEdadPipe,
    DatoImpotantePipe
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
  ]
})
export class AdministracionModule { }
