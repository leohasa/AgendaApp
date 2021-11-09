import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { Post } from '../model/post';
import { Publicacion } from '../model/publicacion';
import { Rol } from '../model/rol';
import { DataPostService } from '../service/data-post.service';
import { SharehtmlService } from '../service/sharehtml.service';


@Component({
    selector: 'app-txt-edit',
    templateUrl: './txt-edit.component.html',
    styleUrls: ['./txt-edit.component.css']
})
export class TxtEditComponent implements OnInit, OnChanges {

    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_justify'],
    ];
    html: string = '';

    @Output()
    postEmitter = new EventEmitter<Post>();

    @Output()
    pubEmitter = new EventEmitter<Publicacion>();

    @Input()
    post: Post;

    pub: Publicacion;

    @Input()
    isEditor: boolean;

    @Input()
    isUser: boolean;

    constructor() {
        this.post = new Post();
        this.pub = new Publicacion();
        this.isEditor = false;
        this.isUser = false;
    }

    ngOnInit(): void {
        this.editor = new Editor();
        this.html = '';

        this.editor.commands
            .focus()
            .scrollIntoView()
            .toggleBold()
            .exec();
    }

    ngOnChanges() {
        this.html = this.post.contenido;
    }

    addPost(): void {
        let title: HTMLInputElement = document.querySelector('#title_') ?? new HTMLInputElement();
        this.post.titulo = title.value;
        this.post.contenido = this.html;
        this.post.plugin.id = localStorage.getItem('idPlugin') ??  '';
        this.post.usuario.username = localStorage.getItem('user') ?? '';
        this.postEmitter.emit(this.post);
    }

    addPub(): void {
        let title: HTMLInputElement = document.querySelector('#title_') ?? new HTMLInputElement();
        this.pub.titulo = '<h1>' + title.value + '</h1>';
        this.pub.contenido = this.html;
        this.pub.usuario.username = localStorage.getItem('user') ?? '';
        this.pubEmitter.emit(this.pub);
        title.value = '';
        this.html = '';
    }
}
