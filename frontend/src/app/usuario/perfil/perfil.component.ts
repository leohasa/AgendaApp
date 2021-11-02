import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { ForoService } from 'src/app/service/foro.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';
//import { EventEmitter } from 'stream';
//import { Popover } from './node_modules/bootstrap/dist/js/bootstrap.esm.min.js';
//import { Popover } from '../../../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  //@Output() voted = new EventEmitter<boolean>();
  //@Output() publicacionOut = new EventEmitter<Publicacion>();
  ;
  //@Input() titulo:string;


  //constructor(private router:Router,private service: ForoService) { }
  constructor(private router:Router, private service: ForoService,private serviceShare : SharehtmlService){}

  ngOnInit(): void {
    
    this.serviceShare.data.subscribe(data => {console.log("Recibiendo data "+data)});
  }

  onSave():void{
    console.log("prueba");
  }
  
  getData(mensaje: Publicacion):void{
    
    console.log("getData");
    
    this.service.createPublicacion(mensaje)
    .subscribe(x=>{console.log("Desde el subscribe"+mensaje.contenido);
                   });
  }

}
