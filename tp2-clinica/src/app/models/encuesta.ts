export class Encuesta
{
  id: string;
  idTurno: string;
  idPaciente: string;
  idEspecialista: string;
  altura: number;
  peso: number;
  temperatura: number;
  presion: number;
  claveUno: string;
  valorUno: string;
  claveDos: string;
  valorDos: string;
  claveTres: string;
  valorTres: string;
  nombrePaciente: string;
  nombreEspecialista: string;
  fecha: string;

  constructor(
  id: string = '',
  idTurno: string = '',
  altura: number = 0,
  peso: number = 0,
  temperatura: number = 0,
  presion: number = 0,
  claveUno: string = '',
  valorUno: string = '',
  claveDos: string = '',
  valorDos:string = '',
  claveTres: string = '',
  valorTres:string = '',
  idPaciente: string = '',
  idEspecialista: string = '',
  nombrePaciente: string = '',
  nombreEspecialista: string = '',
  fecha: string = '')
  {
    this.id = id;
    this.idTurno = idTurno;
    this.altura = altura;
    this.peso = peso;
    this.temperatura = temperatura;
    this.presion = presion;
    this.claveUno = claveUno;
    this.claveDos = claveDos;
    this.valorUno = valorUno;
    this.valorDos = valorDos;
    this.idPaciente = idPaciente;
    this.idEspecialista = idEspecialista;
    this.nombrePaciente = nombrePaciente;
    this.nombreEspecialista = nombreEspecialista;
    this.fecha = fecha;
    this.claveTres = claveTres;
    this.valorTres = valorTres;
  }
}
