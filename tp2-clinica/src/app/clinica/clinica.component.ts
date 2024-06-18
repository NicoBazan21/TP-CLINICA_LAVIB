import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Especialista } from '../models/especialista';
import { Admin } from '../models/admin';
import { Paciente } from '../models/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})

export class ClinicaComponent implements OnInit
{
  user?: Paciente | Especialista | Admin;

  constructor(private toastr: ToastrService, private userService: UserService,
    private router: Router){}

  ngOnInit(): void
  {
    this.toastr.success('Bienvenido', `Sesion iniciada`,
    {
      tapToDismiss: true,
      progressBar: true,
      progressAnimation:'increasing',
      payload:true,
      positionClass: 'toast-top-right'
    });
    this.user = this.userService.sesionFirestore;
  }

  logout()
  {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }
}
