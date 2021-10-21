import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
    selector: 'app-add-proyecto',
    templateUrl: './add-proyecto.component.html',
    styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

    proyecto: Proyecto;

    constructor(private router: Router, private service: ProyectoService) {
        this.proyecto = new Proyecto();
    }

    ngOnInit(): void {
    }

    onSubmit() {

    }

}
