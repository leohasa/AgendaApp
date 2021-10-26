import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
    selector: 'app-list-proyecto',
    templateUrl: './list-proyecto.component.html',
    styleUrls: ['./list-proyecto.component.css']
})
export class ListProyectoComponent implements OnInit {

    proyectos: Proyecto[];

    constructor(private router: Router, private service: ProyectoService) {
        this.proyectos = new Array();
    }

    ngOnInit(): void {
        let username: String = localStorage.getItem('user') ?? '';
        this.service.get(username)
        .subscribe(data => {
            this.proyectos = data;
        });
    }

    add() {
        this.router.navigate(['/proyecto/add']);
    }

    editar(proyecto: Proyecto) {
        localStorage.setItem('idProyecto', proyecto.id.toString());
        this.router.navigate(['/proyecto/edit']);
    }

    delete(proyecto: Proyecto) {
        this.service.delete(proyecto.id)
        .subscribe(data => {
            this.proyectos = this.proyectos.filter(p => p != proyecto);
            alert('Proyecto eliminado');
        });
    }

    verActividades(proyecto: Proyecto) {
        localStorage.setItem('idProyecto', proyecto.id.toString());
        this.router.navigate(['/actividad/list']);
    }

}
