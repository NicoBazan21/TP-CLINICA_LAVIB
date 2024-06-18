import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent
{
  @Input() user!: any;
  @Output() onLogout: EventEmitter<any> = new EventEmitter;

  logout()
  {
    this.onLogout.emit();
  }
}
