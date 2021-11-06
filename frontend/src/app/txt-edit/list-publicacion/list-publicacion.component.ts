import { Component, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioComponent } from 'src/app/comentario/comentario.component';
import { Publicacion } from 'src/app/model/publicacion';
import { ComentarioServiceService } from 'src/app/service/comentario-service.service';
import { ForoService } from 'src/app/service/foro.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';


@Component({
  selector: 'app-list-publicacion',
  templateUrl: './list-publicacion.component.html',
  styleUrls: ['./list-publicacion.component.css']

})

export class ListPublicacionComponent implements OnInit {

  publicacion: Publicacion[];


  constructor(private service: ForoService, private comentarioservice: ComentarioServiceService, private router: Router, private shareService: SharehtmlService) { this.publicacion = []; }



  ngOnInit(): void {
    this.getPublicaciones();

    this.shareService.update.subscribe(() => {
      this.getPublicaciones();
    });
  }

  getPublicaciones() {
    var user = localStorage.getItem("user") ?? "";
    this.service.getPublicaciones(user)
      .subscribe(data => {
        this.publicacion = data;
        this.publicacion = this.publicacion.reverse();
      });
  }
  aumentar(publicacion: Publicacion) {
    this.changePuntuacion(publicacion, true);

  }

  disminuir(publicacion: Publicacion) {
    this.changePuntuacion(publicacion, false);
  }

  changePuntuacion(publicacion: Publicacion, aumento: Boolean) {

    var cadena = publicacion.puntuacion;
    var puntuacion: number = +cadena;

    puntuacion = aumento ? ++puntuacion : --puntuacion;


    publicacion.puntuacion = "" + puntuacion;
    this.shareService.aumentar.emit(publicacion);

  }
  update(publicacion: Publicacion) {
    this.comentarioservice.deleteByIdPublicacion(publicacion.id)
      .subscribe(() => {
        //console.log("elimando comentarios ...",publicacion.id)
        this.service.delete(publicacion).subscribe(() => {

          this.shareService.message.emit("Publicacion eliminada correctamente");
        })
      });

  }
}
