import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-list-usuario',
    templateUrl: './list-usuario.component.html',
    styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

    usuarios: Usuario[];

    constructor(private service: UsuarioService, private router: Router) {
        this.usuarios = [];
    }

    ngOnInit(): void {
        this.service.getUsuarios()
            .subscribe(data => {
                this.usuarios = data;
            });
    }

    addUser() {
        this.router.navigate(['addUser']);
    }

    editar(usuario: Usuario) {
        localStorage.setItem('username', usuario.username.toString());
        this.router.navigate(['editUser']);
    }

    delete(usuario: Usuario) {
        this.service.delete(usuario.username)
            .subscribe(data => {
                this.usuarios = this.usuarios.filter(u => u != usuario);
                alert('Usuario eliminado');
            });
    }

}
