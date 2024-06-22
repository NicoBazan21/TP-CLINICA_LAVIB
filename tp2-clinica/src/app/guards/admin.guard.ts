import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return true;
  // if(userService.sesionFirestore.rol == 'admin')
  // {
  //   return true;
  // }
  // router.navigateByUrl('clinica');
  // return false;
};
