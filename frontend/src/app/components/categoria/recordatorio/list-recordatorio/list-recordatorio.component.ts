import { Component, OnInit } from '@angular/core';
import { Recordatorio } from 'src/app/model/recordatorio';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { RecordatorioService } from 'src/app/service/recordatorio.service';

@Component({
  selector: 'app-list-recordatorio',
  templateUrl: './list-recordatorio.component.html',
  styleUrls: ['./list-recordatorio.component.css']
})
export class ListRecordatorioComponent implements OnInit {

  textInfo:string = "";
  recordatorios:Array<Recordatorio>;

  constructor(
      private servicioRecordatorio:RecordatorioService,
      private servicioNotificacion:NotificacionService
    ) {
    this.recordatorios = new Array();
  }

  ngOnInit(): void {
    let idUser = localStorage.getItem('user') ?? '';
    this.servicioRecordatorio.getRecordatorios(idUser)
    .subscribe(data => {
        this.recordatorios = data;
    });
  }

  delete(recordatorio:Recordatorio):void{
    this.servicioRecordatorio.delete(recordatorio.id)
    .subscribe(data => {
        this.recordatorios = this.recordatorios.filter(r => r != recordatorio);
        this.showInfo('Recordatorio eliminado');
        this.servicioNotificacion.updateNotificaciones(true);
    });
  }

  private showInfo(info:string){
    this.textInfo = info;
    document.getElementById("btnModalInfo")?.click();
  }

}
