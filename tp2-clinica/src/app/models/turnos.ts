export class Turno
{
  id: string;
  fecha: string;
  hora: string[];
  dia: string;
  idEspecialista: string;
  idPaciente: string;
  nombreCompletoEspecialista: string;
  nombreCompletoPaciente: string;
  estadoTurno: string;
  encuesta: string;
  resenia: string;
  especialidad: string;

  constructor(
  id: string,
  fecha:string,
  hora:string[],
  dia: string,
  idEspecialista: string,
  idPaciente: string,
  nombreCompletoEspecialista: string,
  nombreCompletoPaciente: string,
  estadoTurno: string,
  encuesta: string,
  resenia: string,
  especialidad: string)
  {
    this.id = id;
    this.fecha = fecha;
    this.hora = hora;
    this.dia = dia;
    this.idEspecialista = idEspecialista;
    this.idPaciente = idPaciente;
    this.nombreCompletoEspecialista = nombreCompletoEspecialista;
    this.nombreCompletoPaciente = nombreCompletoPaciente;
    this.estadoTurno = estadoTurno;
    this.encuesta = encuesta;
    this.resenia = resenia;
    this.especialidad = especialidad;
  }
}
