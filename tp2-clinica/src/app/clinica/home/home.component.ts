import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  img: any;

  constructor(private userService: UserService){}

  ngOnInit()
  {
    this.userService.traerImagenes(this.userService.sesionFirestore.mail)
    .then(imagenes=> this.img = imagenes);
  
  }
}
