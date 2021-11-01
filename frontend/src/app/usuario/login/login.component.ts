import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario;
    textInfo: string = "";

    constructor(private router: Router, private service: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
    }

    registrar(): void {
        this.router.navigate(['/register']);
    }

    onSubmit(): void {
        this.service.signIn(this.usuario)
        .subscribe(user => {
            if (user) {
                localStorage.setItem('user', user.username.toString());
                window.location.reload();
            } else {
                this.showInfo('Credenciales incorrectas!');
            }
        });
    }

    private showInfo(info:string){
        this.textInfo = info;
        document.getElementById("btnModalInfo")?.click();
    }

}
