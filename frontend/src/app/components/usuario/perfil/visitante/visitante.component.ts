import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Seguidor } from 'src/app/model/seguidor';
import { Usuario } from 'src/app/model/usuario';
import { SeguidorService } from 'src/app/service/seguidor.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  usuario: Usuario;
  seguidor: Usuario;
  username: String='';
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UsuarioService,
    private share: SharehtmlService,
    private followService : SeguidorService
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
    
    var subSollow : Seguidor = new Seguidor();
    
         console.log("seguidor",localStorage.getItem("user")??"")
         
          subSollow.seguidor.username = localStorage.getItem("user")??"";
          subSollow.usuario.username = this.username
          
          console.log(subSollow);
          
          this.followService.addSeguidor(subSollow)
            .subscribe(()=>{
              console.log("algo");
            });
          
          
    console.log("LocalStorage ",localStorage.getItem('user'));
    console.log("perfil acutal",this.username)
  }

}
