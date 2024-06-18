export class Paciente
{
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  mail: string;
  obraSocial: string;
  clave: string
  rol: string;
  imagenUno: string;
  imagenDos: string;

  constructor(id: string,
    nombre: string,
    apellido: string,
    mail: string,
    obraSocial: string,
    edad: number,
    dni: number,
    clave: string,
    rol: string,
    imagenUno: string,
    imagenDos: string)
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.obraSocial = obraSocial;
    this.edad = edad;
    this.dni = dni;
    this.clave = clave;
    this.rol = rol;
    this.imagenUno = imagenUno;
    this.imagenDos = imagenDos;
  }
}
