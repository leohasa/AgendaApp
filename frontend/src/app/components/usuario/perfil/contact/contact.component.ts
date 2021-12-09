import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seguidor } from 'src/app/model/seguidor';
import { SeguidorService } from 'src/app/service/seguidor.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  lstSeguidor:String[];
  
  constructor(private seguidorService : SeguidorService,
              private router: Router)
   {
                
      this.lstSeguidor = [];
      
    }
  
  
  ngOnInit(): void {
    this.seguidorService.getUsernameByIdSeguidor(localStorage.getItem("user")??"")
      .subscribe(seguidos=>{
        console.log(seguidos);
        this.lstSeguidor = seguidos;
      });
      
      
  }
  
  showPerfil(user:String){
        
    this.router.navigate(['/perfil-view/'+user+".php"]);
  }

}
