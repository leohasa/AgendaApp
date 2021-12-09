import { Component, OnInit, Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/model/comentario';
import { Publicacion } from 'src/app/model/publicacion';
import { ComentarioServiceService } from '../../service/comentario-service.service';
import { SharehtmlService } from '../../service/sharehtml.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() commentarioPublicacion : string ;

  expression = 'Comentario Registrado Con Exito';

  comentario: Comentario;
  comentarioList: Comentario[];

  constructor(private router: Router, private service: ComentarioServiceService,private shareService : SharehtmlService) {



    this.comentario = new Comentario();

    this.comentarioList = [];

  }

  ngOnInit(): void {
    this.comentario.usuario.username = localStorage.getItem("user")??"";
    this.comentario.publicacion.id = this.commentarioPublicacion;
  }
  onSave(): void {
    //console.log(" En Progreso ");
  }
  onKey(event: any): void {
    const inputValue = event.target.value;
    this.comentario.contenido = inputValue;


  }
  onSubmit(): void {


    if(this.comentario.contenido === undefined){
      this.expression = 'Debe de escribir un comentario'
    }

    this.service.add(this.comentario).subscribe(()=>{
        let input: HTMLInputElement = document.querySelector('#comment') ?? new HTMLInputElement;
        input.value = '';
        this.service.getPublicacionByPublicacionAndUser(this.commentarioPublicacion)
        .subscribe(x=>{
            this.comentarioList = x;
            });
    })

  }
  showComment() {

    this.service.getPublicacionByPublicacionAndUser(this.commentarioPublicacion)
      .subscribe(x=>{
        this.comentarioList = x;
        });


  }

}
