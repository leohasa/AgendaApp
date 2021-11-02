import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { ForoService } from 'src/app/service/foro.service';

@Component({
  selector: 'app-list-publicacion',
  templateUrl: './list-publicacion.component.html',
  styleUrls: ['./list-publicacion.component.css']
})
export class ListPublicacionComponent implements OnInit {

  publicacion : Publicacion[];
 
  
  constructor(private service: ForoService,private router: Router) { this.publicacion = [];}
  
  
  
  ngOnInit(): void {
    this.service.getPublicaciones()
        .subscribe(data => {
          this.publicacion = data;
          this.publicacion.forEach(element => {
            console.log("cargando publicaciones "+element);
          });
        })
  }

}
