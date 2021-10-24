import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import { Actividad } from 'src/app/model/actividad';
import { Categoria } from 'src/app/model/categoria';
import { Proyecto } from 'src/app/model/proyecto';
import { ActividadService } from 'src/app/service/actividad.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
    selector: 'app-edit-actividad',
    templateUrl: './edit-actividad.component.html',
    styleUrls: ['./edit-actividad.component.css']
})
export class EditActividadComponent implements OnInit {

    actividad: Actividad;
    categorias: Categoria[];

    constructor(private router: Router,
        private actividadService: ActividadService,
        private categoriaService: CategoriaService,
        private proyectoService: ProyectoService) {


        let proyecto: Proyecto = new Proyecto();
        let categoria: Categoria = new Categoria();
        this.actividad = new Actividad();
        this.actividad.proyecto = proyecto;
        this.actividad.categoria = categoria;
        this.categorias = new Array();
    }

    ngOnInit(): void {
        let user: String = sessionStorage.getItem('user') ?? '';
        this.categoriaService.getCategorias(user)
            .subscribe(data => {
                this.categorias = data;
            });

        this.getActividad();
        this.setFlatPickr();
    }

    private getActividad() {
        let idAct: String = localStorage.getItem('idActividad') ?? '';
        this.actividadService.getById(idAct)
            .subscribe(data => {
                this.actividad = data;
            });
    }

    private setFlatPickr() {
        flatpickr('#fechaInicio', {
            plugins: [rangePlugin({ input: "#fechaFin" })],
            locale: Spanish
        });
    }

    onSubmit() {
        let fechaFin: HTMLInputElement = document.querySelector('#fechaFin') ?? new HTMLInputElement();
        this.actividad.fechaFin = fechaFin.value;
        this.actividadService.update(this.actividad)
            .subscribe(data => {
                alert('Actividad actuzalizada correctamente');
                this.backList();
            });
    }

    backList() {
        this.router.navigate(['actividad/list']);
    }

    setFechaFin(fecha: Event) {
        console.log(fecha);
    }
}
