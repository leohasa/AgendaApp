import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from './model/notificacion';
import { Recordatorio } from './model/recordatorio';
import { Rol } from './model/rol';
import { DataService } from './service/data.service';
import { NotificacionService } from './service/notificacion.service';
import { RecordatorioService } from './service/recordatorio.service';
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
    isUser: boolean;
    isAdmin: boolean;
    isEditor: boolean;
    thereRequest: boolean;
    notificaciones: Array<Notificacion>;


    constructor(
        private router: Router, 
        private service: UsuarioService, 
        private dataService: DataService,
        private recordatorioService:RecordatorioService,
        private notificacionService:NotificacionService
        ) {
        this.username = localStorage.getItem('user') ?? '';
        this.roles = new Array();
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

            this.router.navigate(['perfil']);

            
            this.cargarRoles();

            this.dataService.getData()
                .subscribe(data => {
                    this.thereRequest = data;
                });

        }
        this.observarNotificaciones();
    }

    private cargarRoles(): void {
        this.service.getRols(this.username)
            .subscribe(data => {
                this.roles = data;
                this.isUser = this.hasRol('USUARIO');
                this.isAdmin = this.hasRol('ADMINISTRADOR');
                this.isEditor = this.hasRol('EDITOR');
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

    updateNotificaciones():void{
        let user = localStorage.getItem('user') ?? '';
        this.notificacionService.getNotificacionesPorFecha(user).subscribe(data=>{
            this.notificaciones = data;
        });
    }

    observarNotificaciones():void{
        this.updateNotificaciones();
        this.notificacionService.getUpdateNotificaciones().subscribe(data=>{
            this.updateNotificaciones();
        });
    }
}
