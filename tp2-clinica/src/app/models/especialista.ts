export class Especialista
{
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  mail: string;
  especialidades: string[];
  clave: string;
  habilitado: boolean;
  imagenUno: string;
  rol: string;
  inicio: number;
  fin: number;
  diasLaborables: string[];
  
  constructor(id: string,
    nombre: string,
    apellido: string,
    mail: string,
    especialidades: string[],
    edad: number,
    dni: number,
    clave: string,
    habilitado: boolean,
    imagenUno: string,
    rol:string,
    inicio: number,
    fin:number,
    diasLaborables: string[]
  )
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.especialidades = especialidades;
    this.edad = edad;
    this.dni = dni;
    this.clave = clave;
    this.habilitado = habilitado;
    this.imagenUno = imagenUno;
    this.rol = rol;
    this.inicio = inicio;
    this.fin = fin;
    this.diasLaborables = diasLaborables;
  }
}
