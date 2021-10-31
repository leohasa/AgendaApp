import { Component, OnInit } from '@angular/core';
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
    isNotEditor: boolean;


    constructor(private router: Router, private service: UsuarioService) {
        this.username = localStorage.getItem('user') ?? '';
        this.isNotEditor = true;
    }

    ngOnInit(): void {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/login']);
        } else {
            this.router.navigate(['calendar-mes']);
        }
        this.isNotEditor = !this.isEditor();
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

    isEditor(): boolean {
        let roles: Rol[];
        let flag: boolean = false;

        this.service.getRols(this.username)
            .subscribe(data => {
                roles = data;
                roles.forEach(r => {
                    if (r.tipo == 'EDITOR') {
                        flag = true;
                    }
                });
            });

        return flag;
    }
}
