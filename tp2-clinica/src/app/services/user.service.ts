import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Paciente } from '../models/paciente';
import { filter, Observable } from 'rxjs';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Especialista } from '../models/especialista';
import { Admin } from '../models/admin';
import { Turno } from '../models/turnos';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  sesionFirestore!: Paciente | Especialista | Admin;
  constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) { }

  coleccionUsuarios: CollectionReference<DocumentData> = collection(this.firestore, 'usuarios');
  coleccionEspecialidades: CollectionReference<DocumentData> = collection(this.firestore, 'especialidades');

  //Colecciones
  guardarPaciente(paciente: Paciente)
  {
    const documento = doc(this.coleccionUsuarios);
    const id = documento.id;

    return setDoc(documento,
    {
      id: id,
      nombre: paciente.nombre,
      apellido: paciente.apellido,
      edad: paciente.edad,
      dni: paciente.dni,
      obraSocial: paciente.obraSocial,
      mail: paciente.mail,
      clave: paciente.clave,
      rol: paciente.rol
    });
  }

  guardarEspecialista(especialista: Especialista)
  {
    const documento = doc(this.coleccionUsuarios);
    const id = documento.id;

    return setDoc(documento,
    {
      id: id,
      nombre: especialista.nombre,
      apellido: especialista.apellido,
      edad: especialista.edad,
      dni: especialista.dni,
      habilitado: especialista.habilitado,
      mail: especialista.mail,
      clave: especialista.clave,
      especialidades: especialista.especialidades,
      diasLaborables: especialista.diasLaborables,
      rol: especialista.rol,
      inicio: especialista.inicio,
      fin: especialista.fin
    });
  }

  guardarAdmin(paciente: Admin)
  {
    const documento = doc(this.coleccionUsuarios);
    const id = documento.id;

    return setDoc(documento,
    {
      id: id,
      nombre: paciente.nombre,
      apellido: paciente.apellido,
      edad: paciente.edad,
      dni: paciente.dni,
      mail: paciente.mail,
      clave: paciente.clave,
      rol: paciente.rol
    });
  }

  guardarEspecialidad(especialidad: string)
  {
    const documento = doc(this.coleccionEspecialidades);
    const id = documento.id;

    return setDoc(documento,
      {
        id: id,
        especialidad: especialidad
      });
  }

  traerEspecialidades()
  {
    return collectionData(this.coleccionEspecialidades);
  }

  async traerEspecialistasPorEspecialidad(especialidad: string)
  {
    const especialistas = query(this.coleccionUsuarios,
      where('rol','==','Especialista'),
      where('especialidades','array-contains',especialidad));
    
    const querySnaphot = await getDocs(especialistas);

    return querySnaphot.docs.map(doc => doc.data());
  }

  async traerEspecialistaPorNombreEspecialidad(nombre: string, especialidad:string) : Promise<DocumentData[]>
  {
    const especialista = query(this.coleccionUsuarios,
      where('nombre','==',nombre),
      where('especialidades','array-contains',especialidad));
      
    const querySnaphot = await getDocs(especialista);

    return querySnaphot.docs.map(doc=> doc.data());
  }

  async traerEspecialistaPorTurnos(turnos:Turno[]) : Promise<DocumentData[]>
  {
    const idEspecialista = turnos.map(a=>a.idEspecialista);

    const especialista = query(this.coleccionUsuarios,
      where('idEspecialista','in',idEspecialista));
      
    const querySnaphot = await getDocs(especialista);

    return querySnaphot.docs.map(doc=> doc.data());
  }

  traerEspecialistas()
  {
    const chats = query(this.coleccionUsuarios, where('rol','==','Especialista'));
    return collectionData(chats) as Observable<any[]>;
  }

  traerUsuario()
  {
    return collectionData(this.coleccionUsuarios) as Observable<any[]>;
  }

  modificar(user: Paciente | Especialista) : Promise<void>
  {
    const documento = doc(this.coleccionUsuarios, user.id);
    return new Promise((resolve)=>
    {
      updateDoc(documento, {...user}).then((resolve));
    })
  }

  traerUsuarios()
  {
    return collectionData(this.coleccionUsuarios);
  }

  buscarUsuario(mail: string): Promise<any>
  {
    const resultados = query(this.coleccionUsuarios, where("mail","==",mail));
    return new Promise((resolve)=>
    {
      collectionData(resultados).subscribe((a)=>
      {
        resolve(a[0]);
      });
    })
  }

  subirImagen(file: any, numero: number, mail: string)
  {
    const imgRef = ref(this.storage, `${mail}/${numero}`);

    uploadBytes(imgRef, file);
  }

  traerImagenes(mail: string) : Promise<string[]>
  {
    const imagesRef = ref(this.storage, mail);
    let imagenes: any[] = [];

    return new Promise((resolve)=>
    {
      listAll(imagesRef)
      .then(async (response)=>
      {
        for(let item of response.items)
        {
          const url = await getDownloadURL(item);
          imagenes.push(url);
        }
        resolve(imagenes);
      })
    })
  }

  //Auths
  register(email: string, pass:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  login(email: string, pass:string)
  {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  logout()
  {
    return signOut(this.auth);
  }

  obtenerSesion()
  {
    return this.auth.currentUser;
  }

  enviarEmailVerificacion()
  {
    const auth = getAuth();
    return sendEmailVerification(auth.currentUser!);
  }
}
