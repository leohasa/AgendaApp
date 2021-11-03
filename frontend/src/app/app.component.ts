import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from './model/rol';
import { DataService } from './service/data.service';
import { SolicitudService } from './service/solicitud.service';
import { UsuarioService } from './service/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    username: string;
    localStorage = localStorage;
    roles: Rol[];
    isUser: boolean;
    isAdmin: boolean;
    isEditor: boolean;
    thereRequest: boolean;


    constructor(private router: Router, private dataService: DataService, private service: SolicitudService) {
        this.roles = new Array();
        this.username = '';
        this.isUser = true;
        this.isAdmin = true;
        this.isEditor = true;
        this.thereRequest = false;
    }

    ngOnInit(): void {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['calendar-mes']);
        }
        this.suscribeDataService();
    }

    private suscribeDataService(): void {
        this.dataService.getData()
            .subscribe(data => {
                if (data instanceof Array) {
                    this.roles = data;
                    this.isUser = this.hasRol('USUARIO');
                    this.isAdmin = this.hasRol('ADMINISTRADOR');
                    this.isEditor = this.hasRol('EDITOR');
                } else {
                    this.thereRequest = data;
                }

                this.username = localStorage.getItem('user') ?? '';
                this.service.existsByUser(this.username)
                    .subscribe(data => {
                        this.thereRequest = data;
                    });
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
