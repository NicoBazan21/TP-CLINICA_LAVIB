import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Turno } from '../models/turnos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  constructor(private firestore: Firestore) { }

  private coleccionTurnos: CollectionReference<DocumentData> = collection(this.firestore, 'turnos');

  guardarTurno(turno: Turno) : Promise<void>
  {
    const documento = doc(this.coleccionTurnos);
    const id = documento.id;

    return setDoc(documento, 
    {
      id: id,
      fecha: turno.fecha,
      hora: turno.hora[0],
      idEspecialista: turno.idEspecialista,
      idPaciente: turno.idPaciente,
      nombreCompletoEspecialista: turno.nombreCompletoEspecialista,
      nombreCompletoPaciente: turno.nombreCompletoPaciente,
      estadoTurno: turno.estadoTurno,
      encuesta: turno.encuesta,
      resenia: turno.resenia,
      especialidad: turno.especialidad,
      comentarioAtencion: turno.comentarioAtencion
    });
  }

  calificarAtencion(turno: Turno, comentario: string)
  {
    turno.comentarioAtencion = comentario;

    return this.modificarTurno(turno);
  }
  calificarEncuesta(turno: Turno, comentario: string)
  {
    turno.encuesta = comentario;

    return this.modificarTurno(turno);
  }

  finalizarTurno(turno: Turno, resenia: string) : Promise<void>
  {
    turno.resenia = resenia;
    turno.estadoTurno = 'Finalizado';
    return this.modificarTurno(turno);
  }

  cancelarTurno(turno: Turno, comentario: string) : Promise<void>
  {
    turno.estadoTurno = 'Cancelado';
    turno.resenia = comentario;

    return this.modificarTurno(turno);
  }

  aceptarTurno(turno: Turno) : Promise<void>
  {
    turno.estadoTurno = 'Aceptado';

    return this.modificarTurno(turno);
  }

  modificarTurno(turno: Turno) : Promise<void>
  {
    const documento = doc(this.coleccionTurnos, turno.id);

    return updateDoc(documento,{...turno});
  }
  
  traerTurnos()
  {
    return collectionData(this.coleccionTurnos);
  }

  traerTurnosPorEspecialista(idEspecialista: string)
  {
    const turnos = query(this.coleccionTurnos, where('idEspecialista','==',idEspecialista));
    return collectionData(turnos) as Observable<any[]>;
  }

  traerTurnosPorPaciente(idPaciente: string) {
    const turnos = query(this.coleccionTurnos, where('idPaciente','==',idPaciente));
    return collectionData(turnos) as Observable<any[]>;
  }

  async buscarTurnoPorIdTurno(idTurno: string)
  {
    const turnos = query(this.coleccionTurnos,where('id','==',idTurno));
          
    const querySnaphot = await getDocs(turnos);

    return querySnaphot.docs.map(doc=> doc.data());
  }

  async traerTurnosValor()
  {
    const querySnaphot = await getDocs(this.coleccionTurnos);
    return querySnaphot.docs.map(doc=> doc.data());
  }
}
