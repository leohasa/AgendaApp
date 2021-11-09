import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { ForoService } from 'src/app/service/foro.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';


@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

    isUser: boolean;

    constructor(private service: ForoService, private shareService: SharehtmlService) {
        this.isUser = true;
    }

    ngOnInit(): void {
        this.shareService.aumentar.subscribe(x => {
            this.service.editPublicacion(x)
                .subscribe(() => {
                    console.log("Actualizando puntuacion", x.puntuacion);
                });

        })
    }

    addPub(pub: Publicacion) {
        this.service.createPublicacion(pub)
            .subscribe(data => {
                this.shareService.update.emit(true);
                this.service.getPublicaciones(localStorage.getItem("user") ?? "");
            });
    }

}
