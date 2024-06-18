import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  img: any;
  rol: string = '';
  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.userService.traerImagenes(this.userService.sesionFirestore.mail)
    .then(imagenes=> this.img = imagenes);
    this.rol = this.userService.sesionFirestore.rol;
  }
}
