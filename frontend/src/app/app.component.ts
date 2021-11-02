import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from './model/rol';
import { UsuarioService } from './service/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    username: String;
    localStorage = localStorage;
    roles: Rol[];
    isUserOnly: boolean;
    isAdmin: boolean;


    constructor(private router: Router, private service: UsuarioService) {
        this.username = localStorage.getItem('user') ?? '';
        this.roles = new Array();
        this.isUserOnly = true;
        this.isAdmin = true;
    }

    ngOnInit(): void {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['perfil']);
        }
        this.cargarRoles();
    }

    private cargarRoles(): void {
        this.service.getRols(this.username)
            .subscribe(data => {
                this.roles = data;
                this.isUserOnly = !this.hasRol('EDITOR') && !this.hasRol('ADMINISTRADOR');
                this.isAdmin = this.hasRol('ADMINISTRADOR');
            });
    }

    editar() {
        localStorage.setItem('username', this.username.toString());
        this.router.navigate(['/user/edit']);
    }

    solicitar() {
        this.router.navigate(['user/solicitud']);
    }

    logOut() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    hasRol(rol: String): boolean {
        let flag: boolean = false;

        this.roles.forEach(r => {
            if (r.tipo == rol) {
                flag = true;
            }
        });

        return flag;
    }
}
