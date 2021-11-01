import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/model/solicitud';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-list-solicitudes',
    templateUrl: './list-solicitudes.component.html',
    styleUrls: ['./list-solicitudes.component.css']
})
export class ListSolicitudesComponent implements OnInit {

    solicitudes: Solicitud[];
    textInfo: String = "";

    constructor(private router: Router, private service: UsuarioService) {
        this.solicitudes = new Array();
    }

    ngOnInit(): void {
        this.service.getSolicitudes()
            .subscribe(data => {
                this.solicitudes = data;
            });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    aceptar(solicitud: Solicitud) {
        this.service.newEditor(solicitud.id)
            .subscribe(data => {
                this.showInfo(`El usuario ${solicitud.usuario.username} es un editor!`);
            });
    }

}
