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
    selector: 'app-add-actividad',
    templateUrl: './add-actividad.component.html',
    styleUrls: ['./add-actividad.component.css']
})
export class AddActividadComponent implements OnInit {

    actividad: Actividad;
    categorias: Categoria[];

    constructor(private router: Router,
        private actividadService: ActividadService,
        private categoriaService: CategoriaService,
        private proyectoService: ProyectoService) {

        this.actividad = new Actividad();
        this.categorias = new Array();
    }

    ngOnInit(): void {
        let user: String = sessionStorage.getItem('user') ?? '';
        this.categoriaService.getCategorias(user)
            .subscribe(data => {
                this.categorias = data;
            });

        //TODO: Cambia por id de proyecto dinamicamente
        // this.actividad.proyecto = this.proyectoService.
        this.actividad.proyecto.id = '1';
        this.actividad.estado = '1';

        this.setFlatPickr();
    }

    onSubmit(): void {
        let fechaFin: HTMLInputElement = document.querySelector('#fechaFin') ?? new HTMLInputElement();
        this.actividad.fechaFin = fechaFin.value;
        this.actividadService.create(this.actividad)
            .subscribe(data => {
                alert('Actividad agregada');
                this.backList();
            });
    }

    backList(): void {
        this.router.navigate(['/actividad/list']);
    }
    private setFlatPickr() {
        flatpickr('#fechaInicio', {
            plugins: [rangePlugin({ input: "#fechaFin" })],
            locale: Spanish
        });
    }
}
