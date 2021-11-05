import { Element } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { Publicacion } from '../model/publicacion';
import { ForoService } from '../service/foro.service';
import { SharehtmlService } from '../service/sharehtml.service';


@Component({
    selector: 'app-txt-edit',
    templateUrl: './txt-edit.component.html',
    styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit {



    @Input() entrante: Publicacion = new Publicacion();
    @Input() message: string = "";
    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
    html: '';
    titulo: '';



    constructor(private router: Router, private service: ForoService, private serviceShare: SharehtmlService) { }

    ngOnInit(): void {
        this.entrante = new Publicacion();
        this.editor = new Editor();
        this.html = '';
        this.titulo = '';

        this.editor.commands
            .focus()
            .scrollIntoView()
            .toggleBold()
            .exec();
    }
    onKey(event: any): void {
        const inputValue = event.target.value;
        this.titulo = inputValue;
    }
    sendData() {

        this.entrante.usuario.username = localStorage.getItem("username") ?? "";
        this.entrante.titulo = "<h1>" + this.titulo + "<\h1>";
        this.entrante.contenido = this.html;

        if (!(this.html === "" && this.titulo === "")) {

            this.serviceShare.data.emit(this.entrante);

            this.html = "";

            this.message = "Publicacion procesada correctamente";

        } else {

            this.message = "Debe Ingresar el Titulo y contenido de la publicacion";

        }

        this.serviceShare.message.emit(this.message);





    }
}
