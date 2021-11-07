import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createPopperLite as createPopper } from "@popperjs/core";
import { Usuario } from 'src/app/model/usuario';
import { SharehtmlService } from 'src/app/service/sharehtml.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.css']
})
export class FindContactComponent implements OnInit {

  //NgxPopperjsDirective.placement: NgxPopperjsPlacements
  lstUsuarios: string[];
  constructor(private usrService: UsuarioService, private router: Router, private share: SharehtmlService) {


    this.lstUsuarios = []


  }

  ngOnInit(): void {

    /*
    popperTrigger="click" popperPlacement="top"
    */


  }
  searchMatch(event: any): void {
    const inputValue = event.target.value;
    if (inputValue !== "") {
      this.usrService.getUserMatch(inputValue).subscribe(x => {
        this.lstUsuarios = x;
      })
    } 

  }
  showPerfil(u: string) {
    this.router.navigate(['/perfil-view/'+u+".php"]);
  }
}
