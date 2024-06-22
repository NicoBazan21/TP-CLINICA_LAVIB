import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent
{
  @Input() user!: any;
  @Output() onLogout: EventEmitter<any> = new EventEmitter;

  constructor(private router: Router){}
  logout()
  {
    this.onLogout.emit();
  }
  irHistoriaClinica()
  {
    this.router.navigateByUrl("/clinica/misTurnos/turnos/true");
  }
}
