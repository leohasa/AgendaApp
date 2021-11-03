import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/model/publicacion';
import { ForoService } from 'src/app/service/foro.service';
import { SharehtmlService } from 'src/app/service/sharehtml.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() expression: string = '';
  
  message: string = "";

  constructor(private router: Router, private service: ForoService, private shareService: SharehtmlService) {  }

  ngOnInit(): void {
    this.shareService.txtHead.emit("Informacion Basica");
    
    this.shareService.data
      .subscribe(valueTransfer => {

        this.service.createPublicacion(valueTransfer).subscribe(x => {
          
          this.shareService.message.subscribe((value)=>{
            this.expression =  value;    
            this.shareService.expression.emit(this.expression);
            
          });  
          
          this.shareService.update.emit(true);
          this.service.getPublicaciones();
        });

      });
  }



}
