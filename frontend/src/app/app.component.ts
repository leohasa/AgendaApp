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


    constructor(
        private router: Router,
        private dataService: DataService,
        private service: SolicitudService,
        private userService: UsuarioService
    ) {
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
            this.username = localStorage.getItem('user') ?? '';
            // this.cargarRoles();
            this.router.navigate(['/homepage']);
        }
        this.suscribeDataService();
    }

    private cargarRoles(): void {
        this.userService.getRols(this.username)
            .subscribe(data => {
                this.roles = data;
                this.verificarRoles();
            });
    }

    private suscribeDataService(): void {
        this.dataService.getData()
            .subscribe(data => {
                if (data instanceof Array) {
                    this.roles = data;
                    this.verificarRoles();
                }

                this.username = localStorage.getItem('user') ?? '';
                this.service.existsByUser(this.username)
                    .subscribe(data => {
                        this.thereRequest = data;
                    });
            });
    }

    private verificarRoles(): void {
        this.isUser = this.userService.hasRol('USUARIO', this.roles);
        this.isAdmin = this.userService.hasRol('ADMINISTRADOR', this.roles);
        this.isEditor = this.userService.hasRol('EDITOR', this.roles);
    }

    editar() {
        localStorage.setItem('username', this.username.toString());
        this.router.navigate(['/user/perfil']);
    }

    solicitar() {
        this.router.navigate(['user/solicitud']);
    }

    logOut() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
