import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { Publicacion } from '../model/publicacion';
import { ForoService } from '../service/foro.service';


@Component({
  selector: 'app-txt-edit',
  templateUrl: './txt-edit.component.html',
  styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit {

  editor: Editor;
  html : '';
  publicacion : Publicacion;
  
  
  constructor(private router:Router,private service: ForoService) { }

  ngOnInit(): void {
    this.publicacion = new Publicacion();
    this.editor = new Editor();
    this.html = '';
    
  }
  onSave(): void{
    
    
    this.publicacion.titulo = "Desde Angular";
    this.publicacion.usuario.username=localStorage.getItem("user")??"";
    //this.publicacion.fechaPublicacion = current_date();
    this.publicacion.contenido = this.html;
    console.log(this.html)
    console.log(JSON.stringify(this.publicacion.contenido));
    
    this.service.createPublicacion(this.publicacion)
      .subscribe(x=>{console.log("Desde el subscribe"+this.publicacion.contenido);
                     });
    
  }
  onSubmit():void{
    
    
    
    
    
    const el = document.createElement('div');
    el.innerHTML = this.html
    console.log(this.html)
    const textContent = el.textContent
    console.log("texto : "+ textContent);
   
    
  }

}
