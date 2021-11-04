import { Component, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioComponent } from 'src/app/comentario/comentario.component';
import { Publicacion } from 'src/app/model/publicacion';
import { ForoService } from 'src/app/service/foro.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';


@Component({
  selector: 'app-list-publicacion',
  templateUrl: './list-publicacion.component.html',
  styleUrls: ['./list-publicacion.component.css']
  
})

export class ListPublicacionComponent implements OnInit {

  publicacion : Publicacion[];
 
  
  constructor(private service: ForoService,private router: Router,private shareService: SharehtmlService) { this.publicacion = [];}
  
  
  
  ngOnInit(): void {
    this.getPublicaciones();
    
    this.shareService.update.subscribe(()=>{
      this.getPublicaciones();
    });
  }

  getPublicaciones(){
    var user = localStorage.getItem("user")??"";
    this.service.getPublicaciones(user)
        .subscribe(data => {
          this.publicacion = data;
        });
  }
  aumentar(publicacion:Publicacion){
    this.changePuntuacion(publicacion,true);
    
  }
  
  disminuir(publicacion:Publicacion){
    this.changePuntuacion(publicacion,false);
  }
  
  changePuntuacion(publicacion:Publicacion,aumento:Boolean){
    
    var cadena = publicacion.puntuacion;
    var puntuacion :number = +cadena;
    
    puntuacion = aumento? ++puntuacion:--puntuacion;
    
    
    publicacion.puntuacion = ""+puntuacion;
    this.shareService.aumentar.emit(publicacion);
    
  }
}
