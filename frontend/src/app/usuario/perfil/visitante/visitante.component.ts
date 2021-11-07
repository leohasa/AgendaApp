import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  username: String='';
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UsuarioService,
    private share: SharehtmlService
  ) {

    
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')??'';
    this.username = this.username.replace(".php","");
    this.userService.getUsuarioById(this.username)
      .subscribe(x=>{
          this.usuario = x;
      });
  }
  follow(){
    console.log("LocalStorage ",localStorage.getItem('user'));
    console.log("perfil acutal",this.username)
  }

}
