import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from 'src/app/model/notificacion';
import { Solicitud } from 'src/app/model/solicitud';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
    selector: 'app-list-solicitudes',
    templateUrl: './list-solicitudes.component.html',
    styleUrls: ['./list-solicitudes.component.css']
})
export class ListSolicitudesComponent implements OnInit {

    solicitudes: Solicitud[];
    textInfo: String = "";
    notificacion: Notificacion;

    constructor(
        private notificacionServicio: NotificacionService,
        private service: SolicitudService
    ) {
        this.solicitudes = new Array();
        this.notificacion = new Notificacion();
        this.notificacion.titulo = "Solicitud aceptada";
        this.notificacion.descripcion = "Se ha aprobado su solicitud para ser un editor.";
    }

    ngOnInit(): void {
        this.service.listByEstado('1')
            .subscribe(data => {
                this.solicitudes = data;
            });
    }

    private showInfo(info: string) {
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    aceptar(solicitud: Solicitud) {
        this.service.newEditor(solicitud.id)
            .subscribe(data => {
                this.solicitudes = this.solicitudes.filter(s => s != solicitud);
                this.showInfo(`El usuario ${solicitud.usuario.username} es un editor!`);
                this.notificacion.usuario.username = solicitud.usuario.username;
                this.notificacionServicio.create(this.notificacion).subscribe(data => { });
            });
    }

    rechazar(solicitud: Solicitud) {
        this.service.rechazar(solicitud.id)
            .subscribe(data => {
                this.solicitudes = this.solicitudes.filter(s => s != solicitud);
                this.showInfo(`Se rechazo la solicitud del usuario ${solicitud.usuario.username}`);
            });
    }

}
