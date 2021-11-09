import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from './model/notificacion';
import { Rol } from './model/rol';
import { DataService } from './service/data.service';
import { NotificacionService } from './service/notificacion.service';
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
    notificaciones: Array<Notificacion>;


    constructor(
        private router: Router,
        private userService: UsuarioService,
        private dataService: DataService,
        private solicitudService: SolicitudService,
        private notificacionService: NotificacionService
    ) {
        this.roles = new Array();
        this.username = '';
        this.isUser = true;
        this.isAdmin = true;
        this.isEditor = true;
        this.thereRequest = false;
        this.notificaciones = new Array();
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
                this.solicitudService.existsByUser(this.username)
                    .subscribe(data => {
                        this.thereRequest = data;
                    });
                this.observarNotificaciones();
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

    updateNotificaciones(): void {
        let user = localStorage.getItem('user') ?? '';
        this.notificacionService.getNotificacionesPorFecha(user).subscribe(data => {
            this.notificaciones = data;
        });
    }

    observarNotificaciones(): void {
        this.updateNotificaciones();
        this.notificacionService.getUpdateNotificaciones().subscribe(data => {
            this.updateNotificaciones();
        });
    }

    eliminarNotificaciones():void{
        this.notificacionService.deleteNotificaciones(this.username).subscribe();
        this.updateNotificaciones();
    }
}
