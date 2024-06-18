export class Admin
{
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  mail: string;
  clave: string;
  imagenUno: string;
  rol: string;

  constructor(id: string,
    nombre: string,
    apellido: string,
    mail: string,
    edad: number,
    dni: number,
    clave: string,
    imagenUno: string,
    rol:string)
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.edad = edad;
    this.dni = dni;
    this.clave = clave;
    this.imagenUno = imagenUno;
    this.rol = rol;
  }
}
