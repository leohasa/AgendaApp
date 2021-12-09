import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
    selector: 'app-list-actividad',
    templateUrl: './list-actividad.component.html',
    styleUrls: ['./list-actividad.component.css']
})
export class ListActividadComponent implements OnInit {

    actividades: Actividad[];
    textInfo:string = "";

    constructor(private router: Router, private service: ActividadService) {
        this.actividades = new Array();
    }

    ngOnInit(): void {
        let idProyecto = localStorage.getItem('idProyecto') ?? '';
        this.service.get(idProyecto)
        .subscribe(data => {
            this.actividades = data;
        });
    }

    add() {
        this.router.navigate(['/actividad/add']);
    }

    editar(actividad: Actividad) {
        localStorage.setItem('idActividad', actividad.id.toString());
        this.router.navigate(['/actividad/edit']);
    }

    delete(actividad: Actividad) {
        this.service.delete(actividad.id)
        .subscribe(data => {
            this.actividades = this.actividades.filter(a => a != actividad);
            this.showInfo('Actividad eliminada');
        });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    back() {
        this.router.navigate(['/proyecto/list']);
    }

}
