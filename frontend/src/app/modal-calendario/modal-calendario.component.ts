import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { Actividad } from '../model/actividad';
import { Recordatorio } from '../model/recordatorio';
import { RecordatorioService } from '../service/recordatorio.service';

@Component({
  selector: 'app-modal-calendario',
  templateUrl: './modal-calendario.component.html',
  styleUrls: ['./modal-calendario.component.css']
})
export class ModalCalendarioComponent implements OnInit {

  actividad:Actividad;
  recordatorio:Recordatorio;

  constructor(private recordatorioService:RecordatorioService) {
    this.actividad = new Actividad();
    this.recordatorio = new Recordatorio();
  }

  ngOnInit(): void {
    this.setFlatpickr();
  }

  private setFlatpickr(){
    flatpickr('#fecha', {
      locale: Spanish,
      enableTime: true,
      dateFormat: "Y-m-d H:i:s"
    });
  }

  public createActivity():void{
    console.log("Creating activity from modal");
  }

  public createReminder():void{
    this.recordatorio.usuario.username = localStorage.getItem('user') ?? '';
    this.recordatorioService.create(this.recordatorio).subscribe(data => {});
  }
   

}
