import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const logGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);

  return true;
  // if(userService.obtenerSesion())
  // {
  //   return true;
  // }
  // router.navigateByUrl('login');
  // return false;
};
