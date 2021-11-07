import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { Usuario } from 'src/app/model/usuario';
import { SharehtmlService } from 'src/app/service/sharehtml.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-edit-usuario',
    templateUrl: './edit-usuario.component.html',
    styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

    usuario: Usuario;
    textInfo:string = "";
    txtHead: string = "";

    constructor(private router: Router, private service: UsuarioService,private serviceShare : SharehtmlService) {
        this.usuario = new Usuario();

    }

    ngOnInit(): void {
        this.txtHead = "Editar informacion";

        this.serviceShare.txtHead
            .subscribe(x => {this.txtHead = "Informacion Basica"; });
        
        this.serviceShare.expression
            .subscribe( value => {
                this.showInfo(value);
            });
        this.getUser();
            this.eventModal();
    }

    getUser() {
        flatpickr('#fecha', {
            locale: Spanish
        });
        let username = localStorage.getItem('username') ?? '';
        this.service.getUsuarioById(username)
        .subscribe(data => {
            this.usuario = data;
        });
    }

    onSubmit() {
        this.service.updateUsuario(this.usuario)
        .subscribe(data => {
            this.showInfo('Usuario actualizado correctamente!');
        });
    }

    backList() {
        this.router.navigate(['/user/perfil']);
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

    private eventModal(){
        document.getElementById('modalInfo')?.addEventListener('hidden.bs.modal', ()=> {
            this.backList();
        });
    }

}
