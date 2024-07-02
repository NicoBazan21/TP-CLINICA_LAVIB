import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentData } from '../usuarios/usuarios.component';
import * as XLSX from 'xlsx';
import { UserService } from 'src/app/services/user.service';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() listaEspecialistas!: ContentData[];

  @Output() onEnviarEsp: EventEmitter<any> = new EventEmitter;

  constructor(private turnoService: TurnosService){}

  habilitar(esp: any)
  {
    esp.habilitado = !(esp.habilitado);
    this.onEnviarEsp.emit(esp);
  }
  fileName = "PlanillaUsuarios.xlsx";
  async exportarExcel(user: any)
  {
    let dataArray = await this.turnoService.traerTurnosValor();
    let json;
    switch(user.rol)
    {
      case 'Paciente':
        json = dataArray.filter(turno=>turno['idPaciente'] == user.id);
        break;
      case 'Especialista':
        json = dataArray.filter(turno=>turno['idEspecialista'] == user.id);
        break;
      default:
        json = dataArray;
        break;
    }
    
    const ws = XLSX.utils.json_to_sheet(dataArray);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    
    XLSX.writeFile(wb,this.fileName);
  }
}
