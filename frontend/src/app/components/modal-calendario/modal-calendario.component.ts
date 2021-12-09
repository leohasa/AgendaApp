import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { Actividad } from '../../model/actividad';
import { Categoria } from '../../model/categoria';
import { Proyecto } from '../../model/proyecto';
import { Recordatorio } from '../../model/recordatorio';
import { ActividadService } from '../../service/actividad.service';
import { CategoriaService } from '../../service/categoria.service';
import { ProyectoService } from '../../service/proyecto.service';
import { RecordatorioService } from '../../service/recordatorio.service';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import { NotificacionService } from '../../service/notificacion.service';
import { Notificacion } from '../../model/notificacion';

@Component({
    selector: 'app-modal-calendario',
    templateUrl: './modal-calendario.component.html',
    styleUrls: ['./modal-calendario.component.css'],
})
export class ModalCalendarioComponent implements OnInit {

    actividad: Actividad;
    recordatorio: Recordatorio;
    categorias: Array<Categoria>;
    proyectos: Array<Proyecto>;
    notificacion:Notificacion;
    date: Date;
    @Output() sendTrue = new EventEmitter<Boolean>();

	@Input() set setDate(date: Date) {
		this.date = date;
        this.actividad = new Actividad();
        this.recordatorio = new Recordatorio();
		this.actividad.fechaInicio = this.date.toISOString().substr(0, 10);
		this.actividad.fechaFin = this.date.toISOString().substr(0, 10);
		this.recordatorio.fecha = `${this.date.toISOString().substr(0, 10)} 00:00:0`;
		this.ngOnInit();
	};

    constructor(
        private recordatorioService:RecordatorioService,
        private actividadService:ActividadService,
        private categoriaService:CategoriaService,
        private proyectoService:ProyectoService,
        private notificacionService:NotificacionService
    ) {
        this.actividad = new Actividad();
        this.recordatorio = new Recordatorio();
        this.notificacion = new Notificacion();
        this.categorias = new Array();
        this.proyectos = new Array();
        this.date = new Date();
    }

    ngOnInit(): void {
        this.setFlatpickr();
        this.categoriaService
            .getCategorias(localStorage.getItem('user') ?? '')
            .subscribe((data) => {
                this.categorias = data;
            });
        this.proyectoService
            .get(localStorage.getItem('user') ?? '')
            .subscribe((data) => {
                this.proyectos = data;
            });
    }

    private setFlatpickr() {
        flatpickr('#fechahorarec', {
            locale: Spanish,
            enableTime: true,
            dateFormat: 'Y-m-d H:i:s',
			defaultDate: this.date
		});

        flatpickr('#fechaInicioActividad', {
			plugins: [rangePlugin({ input: '#fechaFinActividad' })],
            locale: Spanish,
            enableTime: false,
            dateFormat: 'Y-m-d',
			defaultDate: this.date
		});

		flatpickr('#fechaFinActividad', {
			locale: Spanish,
			enableTime: false,
			dateFormat: 'Y-m-d',
			defaultDate: this.date
		});
    }


    public createActivity(): void {
        let fechaFin: HTMLInputElement =
            document.querySelector('#fechaFinActividad') ??
            new HTMLInputElement();
        this.actividad.fechaFin = fechaFin.value;
        this.actividad.usuario.username = localStorage.getItem('user') ?? '';
        this.actividadService.create(this.actividad).subscribe((data) => {
			this.sendTrue.emit(true);
		});
    }

    private copyNotificacion():void{
        this.notificacion.titulo = this.recordatorio.titulo;
        this.notificacion.descripcion = this.recordatorio.descripcion;
        this.notificacion.fechaHora = this.recordatorio.fecha;
        this.notificacion.usuario.username = this.recordatorio.usuario.username;
    }

    public createReminder(): void {
        this.recordatorio.usuario.username = localStorage.getItem('user') ?? '';
        this.recordatorioService
            .create(this.recordatorio)
            .subscribe((data) => {
				this.sendTrue.emit(true);
                this.copyNotificacion();
                this.notificacionService.create(this.notificacion).subscribe(data => {
                this.notificacionService.updateNotificaciones(true);
                });
			});
    }
}
