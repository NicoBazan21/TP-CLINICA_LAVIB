import { ValidatorFn, ValidationErrors, AbstractControl, AsyncValidatorFn, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';

export function confirmarClave(): ValidatorFn
{
  return (formGroup: AbstractControl): ValidationErrors | null =>
  {
    const clave = formGroup.get('clave');
    const repiteClave = formGroup.get('repiteClave');
    const respuestaError = { noCoincide: 'la clave no coincide'};

    if(clave?.value !== repiteClave?.value)
    {
      formGroup.get('repiteClave')?.setErrors(respuestaError);
      return respuestaError;
    }
    else
    {
      formGroup.get('repiteClave')?.setErrors(null);
      return null;
    }
  }
}
/*
export function usuarioExiste(service: BdService): AsyncValidatorFn
{
  return (control: AbstractControl) =>
   {
    const usuario = control.value;
    return service.TraerUsuario(usuario).pipe(
      map(usuarios =>
        {
          for(let user of usuarios)
          {
            if(user['usuario'] == usuario)
            {
              console.log("Existe");
              return {usuarioExiste: 'usuarioExiste'};
            }
          }
          return null;
        })
    );
  };
}


export function validarCampos(a: string, b: string, c:string, d:string)
{
  if(a.length == 0 || b.length == 0 || c.length == 0 || d.length == 0)
  {
    return false;
  }
  return true;
}
*/
