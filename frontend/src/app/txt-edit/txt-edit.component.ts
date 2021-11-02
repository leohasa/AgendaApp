import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { Publicacion } from '../model/publicacion';
import { ForoService } from '../service/foro.service';
import { SharehtmlService } from '../service/sharehtml.service';


@Component({
  selector: 'app-txt-edit',
  templateUrl: './txt-edit.component.html',
  styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit {

  
  //@Output() enviar: EventEmitter<any> = new EventEmitter<any>();
  @Input() entrante:Publicacion = new Publicacion();
  editor: Editor;
  html : '';
  publicacion : Publicacion;
  titulo : string = "";
  htmlContent : string;
  
  
  constructor(private router:Router,private service: ForoService, private serviceShare : SharehtmlService) { }

  ngOnInit(): void {
    this.publicacion = new Publicacion();
    this.editor = new Editor();
    this.html = '';
    
  }
  sendData(){
    console.log("send data");
    this.entrante.titulo = this.titulo;
    this.entrante.contenido = this.html;
    
    this.serviceShare.data.emit({ data:this.entrante });
    
  }
}
