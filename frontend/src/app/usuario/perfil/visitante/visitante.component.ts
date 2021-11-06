import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { SharehtmlService } from 'src/app/service/sharehtml.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  usuario: Usuario;
  constructor(private userService: UsuarioService, private share: SharehtmlService) { this.usuario = new Usuario(); }

  ngOnInit(): void {
    this.share.username.subscribe(x => {
      console.log(x)
      this.userService.getUsuarioById(x).
        subscribe(user => {
          this.usuario = user;
        });
    });
  }

}
