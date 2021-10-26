import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
    selector: 'app-edit-proyecto',
    templateUrl: './edit-proyecto.component.html',
    styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

    proyecto: Proyecto;
    textInfo:string = "";

    constructor(private router: Router, private service: ProyectoService) {
        this.proyecto = new Proyecto();
    }

    ngOnInit(): void {
        this.setFlatPickr();
        this.getProyecto();
        this.eventModal();
    }

    getProyecto(): void {
        let idP: String = localStorage.getItem('idProyecto') ?? '';
        this.service.getById(idP)
        .subscribe(data => {
            this.proyecto = data;
        });
    }

    private setFlatPickr(): void {
        flatpickr('#fechaInicio', {
            plugins: [rangePlugin({ input: "#fechaFin" })],
            locale: Spanish
        });
    }

    onSubmit(): void {
        let fechaFin: HTMLInputElement = document.querySelector('#fechaFin') ?? new HTMLInputElement();
        this.proyecto.usuario.username = localStorage.getItem('user') ?? '';
        this.proyecto.fechaPrevistaFin = fechaFin.value;
        this.service.update(this.proyecto)
        .subscribe(data => {
            this.showInfo('Proyecto actualizado');
        });
    }

    backList(): void {
        this.router.navigate(['/proyecto/list']);
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }
    
    private eventModal(){
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', ()=> {
            this.backList();
        });
    }

}
