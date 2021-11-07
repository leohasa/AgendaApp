import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { Post } from '../model/post';
import { Publicacion } from '../model/publicacion';
import { Rol } from '../model/rol';
import { DataPostService } from '../service/data-post.service';
import { SharehtmlService } from '../service/sharehtml.service';
import { UsuarioService } from '../service/usuario.service';


@Component({
    selector: 'app-txt-edit',
    templateUrl: './txt-edit.component.html',
    styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit, OnChanges {



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
    html: string = '';
    titulo: string = '';

    @Output()
    postEmitter = new EventEmitter<Post>();

    @Input()
    post: Post;
    roles: Rol[];
    isUser: boolean;
    isEditor: boolean;

    constructor(
        private serviceShare: SharehtmlService,
        private userService: UsuarioService,
        private dataPost: DataPostService) {

        this.post = new Post();
        this.roles = new Array();
        this.isEditor = false;
        this.isUser = false;
    }

    ngOnInit(): void {
        this.entrante = new Publicacion();
        this.editor = new Editor();
        this.html = '';
        this.titulo = this.post.titulo;

        this.editor.commands
            .focus()
            .scrollIntoView()
            .toggleBold()
            .exec();

        this.cargarRoles();
    }

    ngOnChanges() {
        this.html = this.post.contenido;
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

    addPost(): void {
        let title: HTMLInputElement = document.querySelector('#title_') ?? new HTMLInputElement();
        this.post.titulo = title.value;
        this.post.contenido = this.html;
        this.post.plugin.id = localStorage.getItem('idPlugin') ??  '';
        this.post.usuario.username = localStorage.getItem('user') ?? '';
        // this.dataPost.updateData(this.post);
        this.postEmitter.emit(this.post);
    }

    private cargarRoles(): void {
        let username: string = localStorage.getItem('user') ?? '';
        this.userService.getRols(username)
            .subscribe(data => {
                this.roles = data;
                this.isEditor = this.userService.hasRol('EDITOR', this.roles);
                this.isUser = this.userService.hasRol('USUARIO', this.roles);
            });
    }
}
