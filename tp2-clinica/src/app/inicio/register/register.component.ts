import { Component, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent
{
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer!: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}

  ngOnInit()
  {
    this.toastrService.overlayContainer = this.toastContainer;
  }

  onMouseEnter(nombre: string)
  {
    this.toastrService.info(nombre, '',
    {
      easeTime: 100,
      timeOut: 1000
    });

  }

  onMouseLeave()
  {
    this.toastrService.clear();
  }
}
