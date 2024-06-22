import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, doc, DocumentData, Firestore, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private firestore: Firestore) { }

  private coleccionEncuestas: CollectionReference<DocumentData> = collection(this.firestore, 'encuestas');

  guardarEncuesta(encuesta: Encuesta) : Promise<void>
  {
    const documento = doc(this.coleccionEncuestas);
    const id = documento.id;

    return setDoc(documento, 
    {
      id: id,
      idTurno: encuesta.idTurno,
      altura: encuesta.altura,
      peso: encuesta.peso,
      temperatura: encuesta.temperatura,
      presion: encuesta.presion,
      claveUno: encuesta.claveUno,
      valorUno: encuesta.valorUno,
      claveDos: encuesta.claveDos,
      valorDos: encuesta.valorDos,
      idPaciente: encuesta.idPaciente,
      idEspecialista: encuesta.idEspecialista,
      nombrePaciente: encuesta.nombrePaciente,
      nombreEspecialista: encuesta.nombreEspecialista
    });
  }

  async traerEncuesta(idTurno: string) : Promise<any>
  {
    const turnos = query(this.coleccionEncuestas, where('idTurno','==',idTurno));
          
    const querySnaphot = await getDocs(turnos);

    return querySnaphot.docs.map(doc=> doc.data());
  }
}
