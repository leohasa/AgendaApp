import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from 'src/app/model/notificacion';
import { Solicitud } from 'src/app/model/solicitud';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-list-solicitudes',
    templateUrl: './list-solicitudes.component.html',
    styleUrls: ['./list-solicitudes.component.css']
})
export class ListSolicitudesComponent implements OnInit {

    solicitudes: Solicitud[];
    textInfo: String = "";
    notificacion:Notificacion;

    constructor(
            private router: Router,
            private service: UsuarioService,
            private notificacionServicio:NotificacionService
        ) {
        this.solicitudes = new Array();
        this.notificacion = new Notificacion();
        this.notificacion.titulo="Solicitud aceptada";
        this.notificacion.descripcion="Se ha aprobado su solicitud para ser un editor.";
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
            this.notificacion.usuario.username = solicitud.usuario.username;
            this.notificacionServicio.create(this.notificacion).subscribe(data=>{});
        });
    }

}
