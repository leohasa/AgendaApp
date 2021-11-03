import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.service.getPublicaciones()
        .subscribe(data => {
          this.publicacion = data;
          this.publicacion.forEach(element => {
            console.log("cargando publicaciones "+element);
          });
        });
  }
}
