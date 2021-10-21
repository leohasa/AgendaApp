import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-edit-usuario',
    templateUrl: './edit-usuario.component.html',
    styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

    usuario: Usuario;

    constructor(private router: Router, private service: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.getUser();
    }

    getUser() {
        flatpickr('#fecha', {
            locale: Spanish
        });
        let username = localStorage.getItem('username');
        this.service.getUsuarioById(''+username)
        .subscribe(data => {
            this.usuario = data;
        });
    }

    onSubmit() {
        this.service.updateUsuario(this.usuario)
        .subscribe(data => {
            alert('Usuario actualizado correctamente!');
            this.backList();
        });
    }

    backList() {
        this.router.navigate(['listUser']);
    }

}
