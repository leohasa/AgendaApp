import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { Actividad } from '../model/actividad';
import { Categoria } from '../model/categoria';
import { Proyecto } from '../model/proyecto';
import { Recordatorio } from '../model/recordatorio';
import { ActividadService } from '../service/actividad.service';
import { CategoriaService } from '../service/categoria.service';
import { ProyectoService } from '../service/proyecto.service';
import { RecordatorioService } from '../service/recordatorio.service';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';

@Component({
  selector: 'app-modal-calendario',
  templateUrl: './modal-calendario.component.html',
  styleUrls: ['./modal-calendario.component.css']
})
export class ModalCalendarioComponent implements OnInit {

  actividad:Actividad;
  recordatorio:Recordatorio;
  categorias:Array<Categoria>;
  proyectos:Array<Proyecto>;

  constructor(
    private recordatorioService:RecordatorioService,
    private actividadService:ActividadService,
    private categoriaService:CategoriaService,
    private proyectoService:ProyectoService) {
    this.actividad = new Actividad();
    this.actividad.proyecto;
    this.recordatorio = new Recordatorio();
    this.categorias = new Array();
    this.proyectos = new Array();
  }

  ngOnInit(): void {
    this.setFlatpickr();
    this.categoriaService.getCategorias(localStorage.getItem('user') ?? '')
    .subscribe(data => {
      this.categorias = data;
    });
    this.proyectoService.get(localStorage.getItem('user') ?? '')
    .subscribe(data => {
      this.proyectos = data;
    });
  }

  private setFlatpickr(){
    flatpickr('#fechahorarec', {
      locale: Spanish,
      enableTime: true,
      dateFormat: "Y-m-d H:i:s"
    });

    flatpickr('#fechaInicioActividad', {
      plugins: [rangePlugin({ input: "#fechaFinActividad" })],
      locale: Spanish,
      enableTime: false,
      dateFormat: "Y-m-d"
    });

    flatpickr('#fechaFinActividad', {
      locale: Spanish,
      enableTime: false,
      dateFormat: "Y-m-d"
    });

  }

  public createActivity():void{
    let fechaFin: HTMLInputElement = document.querySelector('#fechaFinActividad') ?? new HTMLInputElement();
    this.actividad.fechaFin = fechaFin.value;
    this.actividad.usuario.username = localStorage.getItem('user') ?? '';
    this.actividadService.create(this.actividad).subscribe(data => {});
  }

  public createReminder():void{
    this.recordatorio.usuario.username = localStorage.getItem('user') ?? '';
    this.recordatorioService.create(this.recordatorio).subscribe(data => {});
  }
   

}
