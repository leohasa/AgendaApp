import { Component, Directive, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioComponent } from 'src/app/comentario/comentario.component';
import { Publicacion } from 'src/app/model/publicacion';
import { Usuario } from 'src/app/model/usuario';
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
  @Input() username:String;


  constructor(private service: ForoService,
              private comentarioservice: ComentarioServiceService,
              private router: Router,
              private shareService: SharehtmlService) 
  { 
              this.publicacion = [];
              
  }



  ngOnInit(): void {
    this.getPublicaciones();

    this.shareService.update
      .subscribe(() => {
        this.getPublicaciones();
    });
  }

  getPublicaciones() {
    
    this.username = this.username.replace('@local',localStorage.getItem("user")??"");
    this.service.getPublicaciones(this.username)
      .subscribe(data => {
        this.publicacion = data;
        
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
