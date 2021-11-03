import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/model/solicitud';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-solicitud-editor',
    templateUrl: './solicitud-editor.component.html',
    styleUrls: ['./solicitud-editor.component.css']
})
export class SolicitudEditorComponent implements OnInit {

    solicitud: Solicitud;
    textInfo: String = "";

    constructor(private router: Router, private service: UsuarioService, private dataService: DataService) {
        this.solicitud = new Solicitud();
    }

    ngOnInit(): void {
        this.eventModal();
    }

    onSubmit(): void {
        this.solicitud.usuario.username = localStorage.getItem('user') ?? '';
        this.service.addSolicitud(this.solicitud)
            .subscribe(x => {
                this.dataService.updateData(true);
                this.showInfo('Solicitud enviada al administrador');
            });
    }

    private eventModal() {
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', () => {
            this.backList();
        });
    }

    private showInfo(info: string) {
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    backList() {
        this.router.navigate(['calendar-mes']);
    }

}
